var btnProximo = document.getElementById('btnProximo');
var btnGravar = document.getElementById('btnGravar');
var inputNome = document.getElementById('nome');
var inputCNPJ = document.getElementById('CNPJ');
var inputIE = document.getElementById('IE');
var inputNomeFantasia = document.getElementById('nomeFantasia');
var inputCPF = document.getElementById('CPF');
var inputRG = document.getElementById('RG');
var inputIdade = document.getElementById('idade');
var selectTipo = document.getElementById('selectTipo');
var selectTipo1 = document.getElementById('selectTipo1');
var selectTipo2 = document.getElementById('selectTipo2');
var msgGeral = document.getElementsByClassName('msg-geral')[0];


btnProximo.addEventListener('click' , function() {
  if (selectTipo.value == 1  ){
    selectTipo1.classList.remove('esconder');
    selectTipo1.classList.add('exibir');
    selectTipo2.classList.remove('exibir');
    selectTipo2.classList.add('esconder');
}else if(selectTipo.value == 2){
    selectTipo2.classList.remove('esconder');
    selectTipo2.classList.add('exibir');
    selectTipo1.classList.remove('exibir');
    selectTipo1.classList.add('esconder');
}})



btnGravar.addEventListener('click' , function(){
    msgGeral.innerHTML = '';

    //Nome

    if(inputNome.value == ''){
        inputNome.style.border = '1px solid red';               
        msgGeral.innerHTML += 'Erro: <br> # Nome não informado!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Nome não informado!');
    }else{
        inputNome.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('Nome informado ' + inputNome.value);
    }
  

    if(selectTipo1.classList == 'exibir'){

        //CNPJ
        if(inputCNPJ.value.length !== 14 ){
            inputCNPJ.style.border = '1px solid red';               
            msgGeral.innerHTML += '<br> # CNPJ não contem os 14 digitos!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('CNPJ não contem os 14 digitos!');
        }else{
            inputCNPJ.style.border = '1px solid green';
            msgGeral.classList.add('esconder');
          msgGeral.classList.remove('exibir');
            console.log('CNPJ informado ' + inputCNPJ.value);
        }
    
        //IE
        if(inputIE.value.length !== 12 ){
            inputIE.style.border = '1px solid red';               
            msgGeral.innerHTML += '<br> # IE não contem os 12 digitos!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('IE não contem os 12 digitos!');
        }else{
            inputIE.style.border = '1px solid green';
            msgGeral.classList.add('esconder');
          msgGeral.classList.remove('exibir');
            console.log('IE informado ' + inputIE.value);
        }

        //Nome Fantasia

    if(inputNomeFantasia.value == ''){
        inputNomeFantasia.style.border = '1px solid red';               
        msgGeral.innerHTML += 'Erro: <br> # Nome Fantasia não informado!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Nome Fantasia não informado!');
    }else{
        inputNome.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('Nome Fantasia informado ' + inputNomeFantasia.value);
    }

    }else if(selectTipo2.classList == 'exibir'){

        msgGeral.classList.remove('exibir');
        msgGeral.classList.add('esconder');
            //CPF

    if(inputCPF.value.length !== 11){
        inputCPF.style.border = '1px solid red';               
        msgGeral.innerHTML += '<br> # CPF não contem os 11 digitos!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('CPF não contem os 11 digitos!');
    }else{
        inputCPF.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('CPF informado ' + inputCPF.value);
    }

    //RG

    if(inputRG.value.length !== 10 ){
        inputRG.style.border = '1px solid red';               
        msgGeral.innerHTML += ' <br> # RG não contem os 14 digitos!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('RG não contem os 10 digitos!');
    }else{
        inputRG.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('RG informado ' + inputRG.value);
    }

    //Idade

    if(inputIdade.value < 18 ){
        inputIdade.style.border = '1px solid red';               
        msgGeral.innerHTML += '<br> # Idade não correspondente!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Idade não correspondente!');
    }else{
        inputIdade.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('Idade informada ' + inputCNPJ.value);
    }
    }

    


})