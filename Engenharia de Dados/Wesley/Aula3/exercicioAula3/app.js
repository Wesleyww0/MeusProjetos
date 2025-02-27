var btnValidar = document.getElementById('btnValidar');
var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputCPF = document.getElementById('cpf');
var msgNome = document.getElementsByClassName('msg-nome')[0];
var msgGeral = document.getElementsByClassName('msg-geral')[0];
function NomeComposto (inputName){
    const nomeComoArray = inputName.split(' ')
    return nomeComoArray.length >= 2;
}



btnValidar.addEventListener('click' , function() {
    if (inputNome.value == ''   ){
        inputNome.style.border = '1px solid red';               
        msgGeral.textContent = 'Erros: \n Nome não informado!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Nome não informado');
    }else if(inputNome.value.length < 3){
        inputNome.style.border = '1px solid red';               
        msgGeral.textContent = 'Erros: \n Nome não contem mais de 3 caracteres!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Nome não contem mais de 3 caracteres');
    }else if(NomeComposto (inputNome.value) == false ){ // validando o nome composto com um função
        inputNome.style.border = '1px solid red';               
        msgGeral.textContent = 'Erros: \n Nome deve ser composto!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Nome deve ser composto');
    }else{
      //inputNome.style.backgroundColor = 'white'
      inputNome.style.border = '1px solid green';     
      msgGeral.textContent = '';
      msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');      
      console.log('Nome informado ' + inputNome.value);
    }
    









    if(inputIdade.value == ''){
        inputIdade.style.border = '1px solid red';
         
        msgGeral.textContent = msgGeral.textContent + ' --- Idade não informada!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Idade não informada');
    }else if(inputIdade.value < 18 || inputIdade.value > 60 ){ // validando a idade
        inputNome.style.border = '1px solid red';               
        msgGeral.textContent = msgGeral.textContent +' Idade deve estar entre 18 e 60 anos!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('Idade deve estar entre 18 e 60 anos');
    }else{
        inputIdade.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
        msgGeral.classList.remove('exibir');
        console.log('Idade informado ' + inputIdade.value);
    }

    if(inputCPF.value == ''){
        inputCPF.style.border = '1px solid red';
               
        msgGeral.textContent = msgGeral.textContent + ' --- CPF não informado!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('CPF não informado');
    }else if(inputCPF.value.length < 11 || inputCPF.value.length > 11){
        inputNome.style.border = '1px solid red';               
        msgGeral.textContent = msgGeral.textContent + ' CPF não contem os 11 digitos!';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
        console.log('CPF não contem os 11 digitos!');
    }else{
        inputCPF.style.border = '1px solid green';
        msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
        console.log('CPF informado ' + inputCPF.value);
    }

    if (inputNome.style.border =='1px solid green'&& inputIdade.style.border =='1px solid green'&& inputCPF.style.border =='1px solid green'){
        msgGeral.textContent = 'Parabens, você validou o formulario todo';
        msgGeral.style.backgroundColor = 'lightgreen';
        msgGeral.style.color = 'green';
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
    }
})