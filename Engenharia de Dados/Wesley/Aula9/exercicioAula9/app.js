// ler, gravar no local storage , recolho e monto a tabela tudo no botão gravar
// limpar, limpa os campos

const carros = [

]

var btnGravar = document.getElementById('btnGravar');
var btnLimpar = document.getElementById('btnLimpar');
var inputModelo = document.getElementById('modelo').value;
var inputPlaca = document.getElementById('placa').value;



btnGravar.addEventListener('click', function (){
//novoid = 0
  //if(novoid >= 0){
  //  novoid += 1;
  //  
  //}  
  var jsonObj = JSON.stringify(carros)
  localStorage.setItem('carros', jsonObj)
  
 
})
// ------------------------------
