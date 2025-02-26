var btnValidar = document.getElementById('btnValidar');
var inputNome = document.getElementById('nome');
var msgNome = document.getElementsByClassName('msg-nome')[0];
var msgGeral = document.getElementsByClassName('msg-geral')[0];

// botão validando o que foi escrito no input
btnValidar.addEventListener('click' , function() {
  //console.log ('teste');
  // um igual atribuição - dois iguais valor - 3 iguais tipo e valor
// console.log pra mim ver, para o user.. usar alert.. variavel.style.propriedade.. etc


  if (inputNome.value == ''){
    //inputNome.style.backgroundColor = 'red';
    inputNome.style.border = '1px solid red';
    inputNome.style.color = 'black';   
    inputNome.style.backgroundColor = 'white';
    msgNome.style.display = 'block';
    msgGeral.textContent = 'Nome não informado!';
    msgGeral.classList.remove('esconder');
    msgGeral.classList.add('exibir');
    

    console.log('Nome não informado');
    }else{
      //inputNome.style.backgroundColor = 'white'
      inputNome.style.border = '1px solid green';
      inputNome.style.color = 'white';
      inputNome.style.backgroundColor = 'blue';
      msgNome.style.display = 'none';
      msgGeral.textContent = '';
      msgGeral.classList.add('esconder');
      msgGeral.classList.remove('exibir');
      
      console.log('Nome informado ' + inputNome.value);
    }

});
