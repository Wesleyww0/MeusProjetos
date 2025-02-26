

let botaosomar = document.getElementById('soma');

botaosomar.addEventListener('click' , function(){
let soma1 = document.getElementById('soma1');
let soma2 = document.getElementById('soma2');
let psoma = document.getElementById('psoma');
let resultado = (parseInt(soma1.value) + parseInt(soma2.value)); // usar o parseInt .. parseFloat, para tranformar texto em inteiro ou real.. usar principalmente com input..
console.log(resultado);

psoma.textContent = psoma.textContent + resultado;
});

let botaosubtrair = document.getElementById('subtrair');

botaosubtrair.addEventListener('click' , function(){
let subtrair1 = document.getElementById('subtrair1');
let subtrair2 = document.getElementById('subtrair2');
let psubtrair = document.getElementById('psubtrair');
let resultado = (parseInt(subtrair1.value) - parseInt(subtrair2.value)); // usar o parseInt .. parseFloat, para tranformar texto em inteiro ou real.. usar principalmente com input..
console.log(resultado);

psubtrair.textContent = psubtrair.textContent + resultado;
});

let botaomultiplicar = document.getElementById('multiplicacao');

botaomultiplicar.addEventListener('click' , function(){
let multiplicacao1 = document.getElementById('multiplicacao1');
let multiplicacao2 = document.getElementById('multiplicacao2');
let pmultiplicacao = document.getElementById('pmultiplicacao');
let resultado = (parseInt(multiplicacao1.value) * parseInt(multiplicacao2.value)); // usar o parseInt .. parseFloat, para tranformar texto em inteiro ou real.. usar principalmente com input..
console.log(resultado);

pmultiplicacao.textContent = pmultiplicacao.textContent + resultado;
});

let botaodividir = document.getElementById('divisao');

botaodividir.addEventListener('click' , function(){
let divisao1 = document.getElementById('divisao1');
let soma2 = document.getElementById('divisao2');
let psoma = document.getElementById('pdivisao');
let resultado = (parseInt(divisao1.value) / parseInt(divisao2.value)); // usar o parseInt .. parseFloat, para tranformar texto em inteiro ou real.. usar principalmente com input..
console.log(resultado);

pdivisao.textContent = pdivisao.textContent + resultado;
});