// ler, gravar no local storage , recolho e monto a tabela tudo no botão gravar
// limpar, limpa os campos

const carros = [

]

var btnGravar = document.getElementById('btnGravar');
var btnLimpar = document.getElementById('btnLimpar');
var inputModelo = document.getElementById('modelo');
var inputPlaca = document.getElementById('placa');

btnGravar.addEventListener('click', function (){

  console.log('Modelo informado ' + inputModelo.value);
  console.log('Placa informada ' + inputPlaca.value);
})