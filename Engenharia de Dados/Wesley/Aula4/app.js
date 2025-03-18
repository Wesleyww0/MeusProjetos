var btnBotao = document.querySelector('#botao');
var divResultado = document.querySelector('.resultado');
var inputNumero = document.querySelector('#numero');
var btnBotao2 = document.querySelector('#botao2');
var divResultado2 = document.querySelector('.resultado2');
var inputNumero2 = document.querySelector('#numero2');

btnBotao.addEventListener('click', function () {
    var numero = parseInt(inputNumero.value);
    divResultado.innerHTML = verificaParOuImpar(numero);
    console.log  (`clicou no botão1`);
});

btnBotao2.addEventListener('click', function () {
    var numero = parseInt(inputNumero2.value);
    divResultado2.innerHTML = executaOperacao(numero); // coloquei a função executaOperação para testa-la no botão 2
    console.log  (`clicou no botão2`); // usa o console vai te ajudar na prova mané....
});



// FUNÇÃO 1- Trecho de código, 2 - Reutilizavel ao menos uma vez, 3 - Objetivo especifico... eronfunction

function verificaParOuImpar(numero) { // tem linguagem que precisa passar o tipo ( string, int) do parametro, apenas um apelido, nao precisa ser o nome da variavel
    if (numero % 2 == 0) {
        return ' é par.';
    } else {
        return ' é impar.';
    }
}
function ehImpar(n){
    return (n % 2 != 0);
}

function somaDoisNumeros(a, b){
    return a + b;
}

function executaOperacao(num){
    if(ehImpar(num)){
        return -1; // return = retorna o valor e não executa o que tem mais embaixo, reduz if e else..
    }

    return somaDoisNumeros(num, 2);

}