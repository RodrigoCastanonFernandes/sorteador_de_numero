function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = 0;
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (quantidade <= 0 || quantidade > 30 || quantidade != quantidade) {
        exibirNaTela('Quantidade para sortear inválida!');
    
    } else {
        for (let i = 0; i < quantidade; i++) {
            if (ate <= 0 || ate > 1000 || ate < quantidade || ate != ate) {
                exibirNaTela('Quantidade da lísta inválido!');
                
            } else {
                numero = obterNumeroAleatorio(de, ate);
                while (sorteados.includes(numero)) {
                    numero = obterNumeroAleatorio(de, ate);

                }
                if (quantidade == 1) {
                    sorteados.push(numero);
                    exibirNaTela(`Número sorteado: ${sorteados}`);
                }else{
                    sorteados.push(numero);
                    exibirNaTela(`Números sorteados: ${sorteados}`);
                }
            }
            }
    }
    alterarStatusBotao();
 
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao_reiniciar = document.getElementById('btn-reiniciar');
    if (botao_reiniciar.classList.contains('container__botao-desabilitado')) {
        botao_reiniciar.classList.remove('container__botao-desabilitado');
        botao_reiniciar.classList.add('container__botao');
        botao_reiniciar.removeAttribute('disabled');
    } else {
        botao_reiniciar.classList.remove('container__botao');
        botao_reiniciar.classList.add('container__botao-desabilitado');
        botao_reiniciar.setAttribute('disabled', true);
    }

    let botao_sortear = document.getElementById('btn-sortear');
    if (botao_sortear.classList.contains('container__botao-desabilitado')) {
        botao_sortear.classList.remove('container__botao-desabilitado');
        botao_sortear.classList.add('container__botao');
        botao_sortear.removeAttribute('disabled');
    } else {
        botao_sortear.classList.remove('container__botao');
        botao_sortear.classList.add('container__botao-desabilitado');
        botao_sortear.setAttribute('disabled', true);
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum!</label>';
    alterarStatusBotao();
}

function exibirNaTela(texto) {
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${texto}</label>`;
}
