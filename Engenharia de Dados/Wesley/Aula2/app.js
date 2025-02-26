//let parafrago1 = document.getElementById('p1'); // atenção no id-clase-tag

//console.log(parafrago1);

//console.log(parafrago1.textContent);

//let paragrafos = document.getElementsByTagName('p');

//console.log(paragrafos); // usa o console log..

//console.log(paragrafos[2].textContent);

//let pClass = document.getElementsByClassName('p-teste');

//console.log(pClass);

// pode usar o query como padrão

// let tagP = document.querySelector('p'); // nome da tag

// let elementop1 = document.querySelector('#p1'); // atenção ao seletor # quando for buscar por id pelo query.. o query tras o primeiro elemento da condição

// let classPteste = document.querySelector('.p-teste'); // atenção do . antes da classe.. regra do css


//console.log ( tagP);

//console.log ( elementop1);

//console.log (classPteste);

// se quiser mais elementos, ser mais especifico, nas primeiras linhas..

// if ( classPteste === null){
//console.log('Existe');
//} ... usar para ter resultado diferente de null

// console.log(document.getElementsByTagName('p')[2].textContent) .. modo rapido, bagunçado e pesado. funciona bem com um so acesso

let botao = document.getElementById('botao');

botao.addEventListener('click' , function(){
  //console.log('clicou'); // fazer sempre pra testar o funcionamento do botao.. case sensitive... usar o nome escrito igual em tds as chamadas.
   let paragrafo1 = document.getElementById('p1');
   let paragrafo2 =document.getElementById('p2');
   let paragrafo3 =document.getElementById('p3');
   
   let txt1 = document.getElementById('txtMensagem1');
   let txt2 = document.getElementById('txtMensagem2');
   let resultado = (parseInt(txt1.value) + parseInt(txt2.value)); // usar o parseInt .. parseFloat, para tranformar texto em inteiro ou real.. usar principalmente com input..
   console.log(resultado);

   //paragrafo1.textContent = txt.value;
   //paragrafo2.textContent = paragrafo1.textContent + ' ... duas vzs';
   //paragrafo3.textContent = paragrafo1.textContent + ' blz, é isso 3 vzs';



   //console.log(paragrafo1.textContent);
});







