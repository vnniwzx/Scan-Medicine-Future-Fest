const dbRemedios = {
    "amoxicilina eurofarma": {
        nome: "Amoxicilina Eurofarma",
        desc: "Antibiótico potente contra infecções bacterianas respiratórias, de ouvido e urinárias.",
        contra: "Pessoas com alergia a penicilinas ou cefalosporinas.",
        uso: "Tomar 1 cápsula de 8h em 8h por 7 dias seguidos.",
        preco: "28.50"
    },
    "ibuprofeno": {
        nome: "Ibuprofeno",
        desc: "Anti-inflamatório e analgésico. Alivia dores musculares, cólicas e reduz a febre.",
        contra: "Histórico de úlcera no estômago ou problemas graves nos rins.",
        uso: "Tomar 1 comprimido a cada 6 ou 8 horas após as refeições.",
        preco: "14.90"
    },
    "dipirona monoidratada": {
        nome: "Dipirona Monoidratada",
        desc: "Analgésico e antitérmico ideal para dores de cabeça, febre e dores no corpo.",
        contra: "Alergia a pirazolonas ou asma induzida por analgésicos.",
        uso: "Tomar de 20 a 40 gotas ou 1 comprimido de até 6h em 6h.",
        preco: "8.20"
    },
    "paracetamol": {
        nome: "Paracetamol",
        desc: "Indicado para o alívio temporário de dores leves a moderadas e redução da febre.",
        contra: "Doença grave no fígado ou consumo excessivo de álcool.",
        uso: "Tomar 1 comprimido de até 6h em 6h. Não exceder 4g por dia.",
        preco: "10.40"
    },
    "loratadina eurofarma": {
        nome: "Loratadina Eurofarma",
        desc: "Anti-histamínico de uso diário contra rinite alérgica, espirros e coceiras sem dar sono.",
        contra: "Crianças menores de 2 anos ou alergia aos componentes.",
        uso: "Tomar apenas 1 comprimido uma vez ao dia.",
        preco: "18.90"
    },
    "losartana potassica": {
        nome: "Losartana Potássica",
        desc: "Medicamento para controle da hipertensão arterial (pressão alta) e proteção cardíaca.",
        contra: "Gravidez e insuficiência hepática grave.",
        uso: "Tomar 1 comprimido pela manhã, todos os dias no mesmo horário.",
        preco: "12.30"
    },
    "omeprazol eurofarma": {
        nome: "Omeprazol Eurofarma",
        desc: "Protetor gástrico indicado para gastrite, queimação, refluxo e úlceras.",
        contra: "Alergia a benzimidazóis ou uso combinado com atazanavir.",
        uso: "Tomar 1 cápsula em jejum, 30 minutos antes do café da manhã.",
        preco: "22.10"
    },
    "simeticona": {
        nome: "Simeticona",
        desc: "Alivia o estufamento, gases e desconforto abdominal de forma rápida.",
        contra: "Perfuração ou obstrução intestinal suspeita.",
        uso: "Tomar 1 comprimido ou 30 gotas após as principais refeições.",
        preco: "9.90"
    },
    "cetoprofeno": {
        nome: "Cetoprofeno",
        desc: "Anti-inflamatório indicado para dores de dente, garganta e inflamações gerais.",
        contra: "Insuficiência cardíaca grave, úlcera ativa e gravidez avançada.",
        uso: "Tomar 1 comprimido a cada 12 horas com as refeições.",
        preco: "19.50"
    },
    "cloridrato de metformina": {
        nome: "Cloridrato de Metformina",
        desc: "Antidiabético que ajuda a controlar os níveis de açúcar no sangue (Diabetes Tipo 2).",
        contra: "Insuficiência renal grave ou cetoacidose diabética.",
        uso: "Tomar 1 comprimido junto ou logo após o jantar.",
        preco: "11.15"
    },
    "sinvastatina eurofarma": {
        nome: "Sinvastatina Eurofarma",
        desc: "Indicado para reduzir os níveis de colesterol ruim (LDL) e triglicerídeos.",
        contra: "Doença hepática ativa ou mulheres grávidas.",
        uso: "Tomar 1 comprimido à noite, antes de dormir.",
        preco: "16.80"
    },
    "atenolol": {
        nome: "Atenolol",
        desc: "Controla a pressão arterial, angina e arritmias cardíacas.",
        contra: "Bradicardia acentuada (batimentos muito lentos) ou choque cardiogênico.",
        uso: "Tomar 1 comprimido pela manhã conforme orientação médica.",
        preco: "13.40"
    },
    "prednisona": {
        nome: "Prednisona",
        desc: "Corticoide potente para tratamento de alergias graves, asma e reumatismo.",
        contra: "Infecções fúngicas sistêmicas ou infecções não controladas.",
        uso: "Tomar a dose prescrita em uma única tomada pela manhã.",
        preco: "21.00"
    },
    "buscopan composto": {
        nome: "Buscopan Composto",
        desc: "Antiespasmódico com analgésico ideal para cólicas intestinais, renais e uterinas.",
        contra: "Glaucoma de ângulo fechado ou problemas graves na próstata.",
        uso: "Tomar 1 a 2 comprimidos de até 3 a 4 vezes ao dia.",
        preco: "17.30"
    },
    "azitromicina": {
        nome: "Azitromicina",
        desc: "Antibiótico de curto espectro indicado para infecções de garganta, sinusite e pneumonia.",
        contra: "Histórico de problemas no fígado causados por antibióticos.",
        uso: "Tomar 1 comprimido por dia durante 3 ou 5 dias consecutivos.",
        preco: "29.90"
    },
    "fluconazol eurofarma": {
        nome: "Fluconazol Eurofarma",
        desc: "Antifúngico oral indicado para o tratamento de candidíase e micoses cutâneas.",
        contra: "Uso concomitante com medicamentos que prolongam o intervalo QT cardíaco.",
        uso: "Tomar 1 cápsula em dose única semanal ou conforme prescrição.",
        preco: "15.20"
    },
    "nimesulida": {
        nome: "Nimesulida",
        desc: "Anti-inflamatório e analgésico focado em dores articulares, de ouvido e dente.",
        contra: "Uso em menores de 12 anos e pessoas com problemas hepáticos.",
        uso: "Tomar 1 comprimido a cada 12 horas após comer.",
        preco: "11.80"
    },
    "dexclorfeniramina": {
        nome: "Dexclorfeniramina",
        desc: "Antialérgico eficaz contra coceiras, picadas de inseto e alergias na pele. Pode causar sonolência.",
        contra: "Prematuros, recém-nascidos e pacientes em tratamento com IMAOs.",
        uso: "Tomar 1 comprimido de até 3 a 4 vezes ao dia.",
        preco: "7.90"
    },
    "enapril eurofarma": {
        nome: "Enapril Eurofarma",
        desc: "Inibidor da ECA usado para controle de pressão alta e prevenção de insuficiência cardíaca.",
        contra: "Histórico de angioedema (inchaço súbito na face/garganta).",
        uso: "Tomar 1 comprimido ao dia, preferencialmente no mesmo horário.",
        preco: "14.20"
    },
    "pantoprazol": {
        nome: "Pantoprazol",
        desc: "Reduz a acidez estomacal, tratando esofagite de refluxo e gastrites.",
        contra: "Alergia moderada ou grave a qualquer componente da fórmula.",
        uso: "Tomar 1 comprimido pela manhã com um copo de água.",
        preco: "31.00"
    },
    "aerolin": {
        nome: "Aerolin",
        desc: "Broncodilatador de ação rápida indicado para o alívio da falta de ar na asma e bronquite.",
        contra: "Hipersensibilidade ao salbutamol.",
        uso: "Inalar 1 a 2 jatos do spray aerossol quando houver crise respiratória.",
        preco: "25.60"
    },
    "vonau flash": {
        nome: "Vonau Flash",
        desc: "Evita e trata náuseas e vômitos. Dissolve rapidamente na boca.",
        contra: "Uso concomitante com apomorfina.",
        uso: "Colocar 1 comprimido sob a língua até dissolver por completo.",
        preco: "34.40"
    },
    "dorflex": {
        nome: "Dorflex",
        desc: "Analgésico e relaxante muscular indicado para dores tensionais e contraturas corporais.",
        contra: "Miastenia gravis e gestantes nos primeiros meses.",
        uso: "Tomar 1 a 2 comprimidos de 3 a 4 vezes ao dia.",
        preco: "12.90"
    },
    "nefropax": {
        nome: "Nefropax",
        desc: "Protetor renal e suplementação preventiva controlada para vias urinárias.",
        contra: "Cálculos renais calcificados de grande porte.",
        uso: "Tomar 1 comprimido ao dia junto ao almoço.",
        preco: "45.00"
    },
    "eurovit c": {
        nome: "Eurovit C",
        desc: "Suplemento de Vitamina C efervescente para fortalecimento da imunidade corporal.",
        contra: "Histórico de oxalúria ou cálculos renais de repetição.",
        uso: "Dissolver 1 comprimido em um copo de água filtrada ao dia.",
        preco: "13.50"
    },
    "secnidazol eurofarma": {
        nome: "Secnidazol Eurofarma",
        desc: "Antiparasitário eficaz no tratamento de amebíase, giardíase e tricomoníase.",
        contra: "Primeiro trimestre de gravidez e ingestão de bebidas alcoólicas.",
        uso: "Tomar 2 comprimidos em dose única durante uma refeição à noite.",
        preco: "18.20"
    },
    "tadalafila": {
        nome: "Tadalafila",
        desc: "Tratamento da disfunção erétil e dos sintomas da hiperplasia prostática benigna.",
        contra: "Pacientes que usam medicamentos contendo nitratos orgânicos.",
        uso: "Tomar 1 comprimido cerca de 30 minutos antes da atividade.",
        preco: "42.00"
    },
    "meloxicam": {
        nome: "Meloxicam",
        desc: "Anti-inflamatório indicado para o tratamento dos sintomas da artrite e artrose.",
        contra: "Úlcera gastrointestinal activa ou sangramentos vigentes.",
        uso: "Tomar apenas 1 comprimido (15mg) por dia.",
        preco: "22.40"
    },
    "cloridrato de sertralina": {
        nome: "Cloridrato de Sertralina",
        desc: "Antidepressivo indicado para depressão, ansiedade, pânico e transtorno obsessivo-compulsivo.",
        contra: "Uso concomitante com inibidores da MAO ou pimozida.",
        uso: "Tomar 1 comprimido pela manhã ou à noite, conforme prescrição médica.",
        preco: "38.90"
    },
    "butilbrometo de escopolamina": {
        nome: "Butilbrometo de Escopolamina",
        desc: "Tratamento dos espasmos e cólicas do trato gastrintestinal e vias biliares.",
        contra: "Megacólon e miastenia gravis.",
        uso: "Tomar 1 a 2 comprimidos de até 3 a 4 vezes ao dia.",
        preco: "10.10"
    }
};
