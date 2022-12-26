const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatisticas')

controle.forEach(e => {
    e.addEventListener('click', (event) => {
        atualizaEstatisticas(event.target.dataset.controle, event.target.dataset.peca, event.target.parentNode)
        operacao(event.target.dataset.controle, event.target.parentNode)       
    })
});

function operacao (operacao, controle){
    const peca = controle.querySelector('[data-contador]')
    if(operacao == '+'){
        peca.value++
    } else if(operacao == '-' && peca.value > 0){
        peca.value--
    }
}

function atualizaEstatisticas(operacao, pecaDoRobo, qtdPeca){
    const peca = qtdPeca.querySelector('[data-contador]')
    if(operacao == '+'){
        estatisticas.forEach(e => {
        e.innerHTML = parseInt(e.innerHTML) + pecas[pecaDoRobo][e.dataset.estatisticas]
        })
    } else if(operacao == '-' && peca.value > 0){
        estatisticas.forEach(e => {
            e.innerHTML = parseInt(e.innerHTML) - pecas[pecaDoRobo][e.dataset.estatisticas]
        })
    }
}