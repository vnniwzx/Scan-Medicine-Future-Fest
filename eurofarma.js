const app = {
    userContext: 'user',
    isNewUser: false,
    currentUser: null,
    activeRemedio: null,
    activeTipoPedido: '',

    init: function() {
        this.loadSettings();
        if(!localStorage.getItem('app_users')) localStorage.setItem('app_users', JSON.stringify({}));
        if(!localStorage.getItem('app_pedidos')) localStorage.setItem('app_pedidos', JSON.stringify([]));
    },

    setContext: function(context) {
        this.userContext = context;
        this.toggleScreen('tela-auth');
        document.getElementById('auth-title').innerText = context === 'user' ? 'Área do Paciente' : 'Portal do Funcionário';
        document.getElementById('toggle-auth').style.display = context === 'user' ? 'block' : 'none';
    },

    resetToContext: function() { this.toggleScreen('tela-tipo-usuario'); },

    toggleAuthMode: function() {
        this.isNewUser = !this.isNewUser;
        document.getElementById('auth-title').innerText = this.isNewUser ? 'Nova Conta Paciente' : 'Área do Paciente';
        document.getElementById('btn-auth-submit').innerText = this.isNewUser ? 'Criar Registro' : 'Entrar';
    },

    handleAuth: function() {
        const email = document.getElementById('auth-email').value;
        const pass = document.getElementById('auth-pass').value;

        if(!email || !pass) { alert('Insira os dados solicitados.'); return; }

        let users = JSON.parse(localStorage.getItem('app_users'));

        if(this.isNewUser && this.userContext === 'user') {
            if(users[email]) { alert('Usuário já registrado.'); return; }
            users[email] = { password: pass, type: 'user', name: email.split('@')[0], photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop' };
            localStorage.setItem('app_users', JSON.stringify(users));
            this.currentUser = users[email];
            this.currentUser.email = email;
            this.toggleScreen('tela-termos');
        } else {
            if(this.userContext === 'staff' && !users[email]) {
                users[email] = { password: pass, type: 'staff', name: 'Colaborador Eurofarma', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=100&auto=format&fit=crop' };
                localStorage.setItem('app_users', JSON.stringify(users));
            }

            let user = users[email];
            if(user && user.password === pass) {
                this.currentUser = user;
                this.currentUser.email = email;
                this.entrarNoApp();
            } else {
                alert('Credenciais inconsistentes.');
            }
        }
    },

    acceptTerms: function() { this.entrarNoApp(); },

    entrarNoApp: function() {
        document.getElementById('app-bar').classList.remove('hidden');
        document.getElementById('bar-user-name').innerText = this.currentUser.name;
        document.getElementById('bar-user-photo').src = this.currentUser.photo;
        document.getElementById('profile-preview-photo').src = this.currentUser.photo;
        document.getElementById('perf-email').value = this.currentUser.email;

        if(this.userContext === 'user') {
            this.toggleScreen('tela-home-user');
        } else {
            this.toggleScreen('tela-home-staff');
            this.renderPedidosStaff();
        }
    },

    toggleScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
        if(['tela-tipo-usuario', 'tela-auth', 'tela-termos'].includes(screenId)) {
            document.getElementById('app-bar').classList.add('hidden');
        }
    },

    openScanner: function() {
        document.getElementById('scanner-area').classList.remove('hidden');
        document.getElementById('search-area').classList.add('hidden');
    },
    closeScanner: function() { document.getElementById('scanner-area').classList.add('hidden'); },
    
    simularScan: function() {
        const chaves = Object.keys(dbRemedios);
        const randomKey = chaves[Math.floor(Math.random() * chaves.length)];
        this.exibirRemedio(dbRemedios[randomKey]);
    },

    openSearch: function() {
        document.getElementById('search-area').classList.remove('hidden');
        document.getElementById('scanner-area').classList.add('hidden');
    },

    executarPesquisa: function() {
        const query = document.getElementById('search-input').value.toLowerCase().trim();
        const errEl = document.getElementById('search-error');
        
        if(dbRemedios[query]) {
            errEl.classList.add('hidden');
            this.exibirRemedio(dbRemedios[query]);
        } else {
            errEl.classList.remove('hidden');
        }
    },

    exibirRemedio: function(rem) {
        this.activeRemedio = rem;
        document.getElementById('rem-nome').innerText = rem.nome;
        document.getElementById('rem-descricao').innerText = rem.desc;
        document.getElementById('rem-contra').innerText = rem.contra;
        document.getElementById('rem-uso').innerText = rem.uso;
        document.getElementById('rem-preco').innerText = `R$ ${rem.preco}`;
        this.toggleScreen('tela-remedio');
    },

    voltarParaHomeUser: function() {
        this.toggleScreen('tela-home-user');
        document.getElementById('scanner-area').classList.add('hidden');
        document.getElementById('search-area').classList.add('hidden');
        document.getElementById('search-input').value = '';
    },

    abrirFluxoPedido: function(tipo) {
        this.activeTipoPedido = tipo;
        this.toggleScreen('tela-fluxo-pedido');
        document.getElementById('pedido-titulo').innerText = `${tipo}`;

        if(tipo === 'Retirada') {
            document.getElementById('fluxo-retirada').classList.remove('hidden');
            document.getElementById('fluxo-entrega').classList.add('hidden');
            document.getElementById('fluxo-entrega-sucesso').classList.add('hidden');
            
            let numRandom = Math.floor(Math.random() * 900) + 100;
            document.getElementById('num-pedido-retirada').innerText = numRandom;
            
            this.salvarPedidoNoSistema(tipo, `Retirada Balcão (Token: #${numRandom})`);
        } else {
            document.getElementById('fluxo-retirada').classList.add('hidden');
            document.getElementById('fluxo-entrega').classList.remove('hidden');
            document.getElementById('fluxo-entrega-sucesso').classList.add('hidden');
        }
    },

    checkTroco: function(val) {
        if(val === 'Dinheiro') document.getElementById('grupo-troco').classList.remove('hidden');
        else document.getElementById('grupo-troco').classList.add('hidden');
    },

    finalizarPedidoEntrega: function() {
        const end = document.getElementById('ent-endereco').value;
        const pag = document.getElementById('ent-pagamento').value;
        const troco = document.getElementById('ent-troco').value || 'Não necessário';

        if(!end) { alert('Informe o endereço de destino.'); return; }

        document.getElementById('fluxo-entrega').classList.add('hidden');
        document.getElementById('fluxo-entrega-sucesso').classList.remove('hidden');
        
        let tempoRnd = Math.floor(Math.random() * 20) + 15;
        document.getElementById('tempo-estimado').innerText = `${tempoRnd} minutos`;

        let detalhes = `Entrega: ${end} | Método: ${pag} (Troco: ${troco})`;
        this.salvarPedidoNoSistema('Entrega', detalhes);
    },

    salvarPedidoNoSistema: function(tipo, detalhe) {
        let pedidos = JSON.parse(localStorage.getItem('app_pedidos')) || [];
        pedidos.push({
            id: Date.now(),
            paciente: this.currentUser.name,
            remedio: this.activeRemedio.nome,
            tipo: tipo,
            informacoes: detalhe,
            status: 'Pendente'
        });
        localStorage.setItem('app_pedidos', JSON.stringify(pedidos));
    },

    renderPedidosStaff: function() {
        const container = document.getElementById('lista-pedidos-staff');
        let pedidos = JSON.parse(localStorage.getItem('app_pedidos')) || [];

        if(pedidos.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding: 40px 0;">Sem requisições na fila.</p>';
            return;
        }

        container.innerHTML = '';
        pedidos.reverse().forEach(p => {
            let card = document.createElement('div');
            card.className = 'order-card';
            card.innerHTML = `
                <span class="order-badge ${p.status.toLowerCase()}">${p.status}</span>
                <h4 style="font-size:1.1rem; font-weight:700;">💊 ${p.remedio}</h4>
                <p style="font-size:0.85rem; color:var(--text-muted)"><strong>Paciente:</strong> ${p.paciente} | <strong>Tipo:</strong> ${p.tipo}</p>
                <p style="font-size:0.8rem; background:rgba(0,0,0,0.02); padding:8px; border-radius:6px; color:var(--text-main); line-height:1.4">${p.informacoes}</p>
                ${p.status === 'Pendente' ? `<button class="btn btn-primary" style="padding:8px 12px; font-size:0.8rem; margin-top:6px; width:fit-content" onclick="app.finalizarPedidoStaff(${p.id})">Concluir Operação</button>` : ''}
            `;
            container.appendChild(card);
        });
    },

    finalizarPedidoStaff: function(id) {
        let pedidos = JSON.parse(localStorage.getItem('app_pedidos')) || [];
        pedidos = pedidos.map(p => { if(p.id === id) p.status = 'Finalizada'; return p; });
        localStorage.setItem('app_pedidos', JSON.stringify(pedidos));
        this.renderPedidosStaff();
    },

    changePhoto: function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('profile-preview-photo').src = reader.result;
            document.getElementById('bar-user-photo').src = reader.result;
            
            let users = JSON.parse(localStorage.getItem('app_users'));
            if(app.currentUser && users[app.currentUser.email]) {
                users[app.currentUser.email].photo = reader.result;
                localStorage.setItem('app_users', JSON.stringify(users));
                app.currentUser.photo = reader.result;
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    },

    saveProfileConfig: function() {
        const novoEmail = document.getElementById('perf-email').value;
        const novaSenha = document.getElementById('perf-pass').value;
        let users = JSON.parse(localStorage.getItem('app_users'));

        if(users[this.currentUser.email]) {
            let dadosAntigos = users[this.currentUser.email];
            if(novaSenha) dadosAntigos.password = novaSenha;
            
            if(novoEmail !== this.currentUser.email) {
                dadosAntigos.name = novoEmail.split('@')[0];
                users[novoEmail] = dadosAntigos;
                delete users[this.currentUser.email];
                this.currentUser.email = novoEmail;
            }
            localStorage.setItem('app_users', JSON.stringify(users));
            this.currentUser.name = dadosAntigos.name;
            document.getElementById('bar-user-name').innerText = this.currentUser.name;
            alert('Ajustes consolidados com sucesso!');
            this.fecharPerfil();
        }
    },

    toggleDarkMode: function(isDark) {
        if(isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    },

    changeFontSize: function(sizeClass) {
        document.body.classList.remove('font-sm', 'font-md', 'font-lg');
        document.body.classList.add(sizeClass);
        localStorage.setItem('fontSize', sizeClass);
    },

    loadSettings: function() {
        const theme = localStorage.getItem('theme');
        const size = localStorage.getItem('fontSize');

        if(theme === 'dark') {
            document.body.classList.add('dark-mode');
            if(document.getElementById('chk-dark-mode')) document.getElementById('chk-dark-mode').checked = true;
        }
        if(size) {
            document.body.classList.add(size);
            if(document.getElementById('select-font-size')) document.getElementById('select-font-size').value = size;
        }
    },

    fecharPerfil: function() {
        if(this.userContext === 'user') this.toggleScreen('tela-home-user');
        else { this.toggleScreen('tela-home-staff'); this.renderPedidosStaff(); }
    },

    logout: function() {
        this.currentUser = null;
        this.isNewUser = false;
        document.getElementById('auth-email').value = '';
        document.getElementById('auth-pass').value = '';
        this.toggleScreen('tela-tipo-usuario');
    }
};

window.onload = () => { app.init(); };
