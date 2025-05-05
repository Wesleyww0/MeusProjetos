// Seleciona o formulário e a tabela
var form = document.getElementById('dadosForm');
var tabelaBody = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
var btnGravar = document.getElementById('btnGravar');

// Adiciona evento de submit ao formulário
btnGravar.addEventListener('click', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  
// Pega os valores dos inputs
var inputModelo = document.getElementById('modelo').value;
var inputPlaca = document.getElementById('placa').value;

  // Cria uma nova linha na tabela
  var novaLinha = tabelaBody.insertRow();

  // Cria as células
  var celulaModelo = novaLinha.insertCell(0);
  var celulaPlaca = novaLinha.insertCell(1);
  

  // Insere os dados nas células
  celulaModelo.textContent = inputModelo;
  celulaPlaca.textContent = inputPlaca;
  

  // Limpa os campos do formulário após inserir
  form.reset();
});

localStorage.setItem('Modelo', + inputModelo)
localStorage.setItem('Placa', inputPlaca)