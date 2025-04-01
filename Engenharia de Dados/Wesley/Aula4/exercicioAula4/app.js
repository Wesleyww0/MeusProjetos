var btnProximo = document.getElementById('btnProximo');
var btnGravar = document.getElementById('btnGravar');
var inputGrausC = document.getElementById('grausC');
var inputGrausF = document.getElementById('grausF');
var inputNumero1 = document.getElementById('numero1');
var inputNumero2 = document.getElementById('numero2');
var inputNumero3 = document.getElementById('numero3');
var inputResultado2 = document.getElementById('resultado2');
var inputResultado3 = document.getElementById('resultado3');
var inputValorQ3 = document.getElementById('valor');
var selectTipo = document.getElementById('selectTipo');
var selectTipo1 = document.getElementById('selectTipo1');
var selectTipo2 = document.getElementById('selectTipo2');
var selectTipo3 = document.getElementById('selectTipo3');

btnProximo.addEventListener('click' , function(){

    
    selectTipo1.classList.add('esconder');
    selectTipo2.classList.add('esconder');
    selectTipo3.classList.add('esconder');
    selectTipo1.classList.remove('exibir');
    selectTipo2.classList.remove('exibir');
    selectTipo3.classList.remove('exibir');


    if(selectTipo.value == 2){
        selectTipo1.classList.remove('esconder');
        selectTipo1.classList.add('exibir');
    }else if(selectTipo.value == 3){
        selectTipo2.classList.remove('esconder');
        selectTipo2.classList.add('exibir');
    }else if(selectTipo.value == 4){
        selectTipo3.classList.remove('esconder');
        selectTipo3.classList.add('exibir');
    }

})

btnExecutar.addEventListener('click' , function(){

    // Ex1
    var numero = parseInt(inputGrausC.value);
    inputGrausF.innerHTML = grausCParaGrausF(numero);

    // Ex2
   

    // Ex3



})

function grausCParaGrausF (c){
    return  (c = (c * 1.8) + 32);
}

function maiorNumero (x){
    
}