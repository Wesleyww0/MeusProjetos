// ler, gravar no local storage , recolho e monto a tabela tudo no botão gravar
// limpar, limpa os campos



var btnGravar = document.getElementById('btnGravar');
var btnLimpar = document.getElementById('btnLimpar');
var inputMarca = document.getElementById('marca');
var inputPlaca = document.getElementById('placa');
var carros = [];

carregarCarros()

btnGravar.addEventListener('click', function (){
let errosEncontrados = validaCadastro()

if (errosEncontrados != ''){
  exibeAlert(errosEncontrados, 'ERRO')
  return
}

if (estaInserido) {
  let idCarro = incrementaCodigo()
  carros.push({
    id: idCarro,
    placa: inputPlaca.value.toUpperCase(),
    marca: inputMarca.value.toUpperCase(),
    status: selectStatus.value
  })
}else{
  //carros.forEach(function (placa)) {
if (placa.id == inputId.value){
  placa.placa = inputPlaca.value.toUpperCase(),
  placa.marca = inputMarca.value.toUpperCase(),
  placa.status =  selectStatus.value
  }
}
  

  console.log('Marca informado ' + inputMarca.value);
  console.log('Placa informada ' + inputPlaca.value);
})


function estaInserido(){
  return inputId.value == ''
}

function placaJaExiste(placas){
  let placas = JSON.parse(localStorage.getItem('Carros'))
    if (placas == null)  return false

    let placaEncontrada = placas.find((carros) => carros.placa == placas)
    return placaEncontrada ? true : false

}

function carregarCampos(){
  let placas = JSON.parse(localStorage.getItem('carros'))
  

  let placa = placas.find((carros) => carros.id == id)

  if(placa){
    inputId.value = placa.id
    inputPlaca.value = placa.placa
    inputMarca.value = placa.marca
    selectStatus.value = placa.status
  }

}

function validaCadastro(){
  let erros = ''
  if ( placaJaExiste(inputPlaca.value())){
    erros = 'Placa já existe' + inputModelo.Placa.value.toUpperCase()
  }
   
  if (inputMarca.value == ''){
    erros += 'Informe a Marca do carro<br>'
  }

  if (inputPlaca.value == ''){
    erros += 'Informe a Placa do carro<br>'
  }

  if (inputMarca.value == ''){
    erros += 'Informe o Status !'
  }

  return erros
}

function exibeAlert (){

}

function escondeAlert (){

}

function incremental(){
  let identity = localStorage.getItem('identity');
  if (identity == null){
      identity = 0;
  } else {
      identity = parseInt(identity);
  }
  return identity += 1;

}

function carregarCarros() {
  let JsonObj = localstorage.getItem('carros')
  

  if (JsonObj) carros = JSON.parse(jsonObj)

  let carros = JSON.parse(localStorage.getItem('carros'))

  carros.forEach((carro) => { // Mostra os valores no HTML
    html +=`<tr>`
    html +=`<td> ${carro.id}</td>`
    html +=`<td>${carro.Modelo}</td>`
    html +=`<td>${carro.Placa}</td>`
    html +=`<td>${tagStatus}</td>`
    html +=`<td>` +
              `<button onClick="CarregaCampos(${carro.id})" "type=button" data-id="${carro.id}">Editar</button>`
              `<button onClick="excluir(${carro.id})" data-id="${carro.id}">Excluir</button>` 
              `</td>`
    html +=` </tr>`
    });
    document.getElementById('conteudo').innerHTML = html;

  
}
