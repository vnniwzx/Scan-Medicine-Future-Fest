function switchTab(tab) {
    const tabEntrar = document.getElementById('tab-entrar');
    const tabRegistrar = document.getElementById('tab-registrar');
    const formEntrar = document.getElementById('form-entrar');
    const formRegistrar = document.getElementById('form-registrar');

    if (tab === 'entrar') {
        tabEntrar.classList.add('active');
        tabRegistrar.classList.remove('active');
        formEntrar.classList.add('active');
        formRegistrar.classList.remove('active');
    } else if (tab === 'registrar') {
        tabRegistrar.classList.add('active');
        tabEntrar.classList.remove('active');
        formRegistrar.classList.add('active');
        formEntrar.classList.remove('active');
    }
}
