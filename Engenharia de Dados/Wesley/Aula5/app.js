var inputExemplo = document.getElementById('elemento');
var inputRespostaQ1 = document.getElementById('resposta1');
var btnResposta1 = document.getElementById('btnresposta1');
var inputRespostaQ2 = document.getElementsByClassName('resposta2') [0];
var btnResposta2 = document.getElementById('btnresposta2');
var inputRespostaQ3 = document.getElementsByClassName('resposta3') [0];
var btnResposta3 = document.getElementById('btnresposta3');
var btnResposta4 = document.getElementById('btnresposta4');
var inputNome = document.getElementById('nome')
var inputSobrenome = document.getElementById('sobrenome')

btnResposta1.addEventListener('click' , function() {
    console.log('click');
    if(inputRespostaQ1.value != ''){
        btnResposta1.style.color = 'blue';
        btnResposta1.style.border = '1px solid green';
       
        console.log('Nome não informado!');
    }
})

btnResposta2.addEventListener('click' , function() {
    console.log('click');
    if(inputRespostaQ2.value != ''){
        btnResposta2.style.color = 'yellow';
        btnResposta2.style.border = '1px solid green';
       
        console.log('Nome não informado!');
    }
})

btnResposta3.addEventListener('click' , function() {
    console.log('click');
    
        inputRespostaQ3.style.color = 'orange';
       
       
        console.log('Nome não informado!');

})

btnResposta4.addEventListener('click' , function() {
    console.log('clicou no botão da questão 4');
    
        

})

