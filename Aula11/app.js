var inputNome = document.getElementById ('inputNome');
var selectSexo = document.getElementById ('selectSexo');
var selectStatus = document.getElementById ('selectStatus');
var selectSexo1 = document.getElementById ('sexo1');
var selectSexo2 = document.getElementById ('sexo2');
var selectSexo3 = document.getElementById ('sexo3');
var id = document.getElementById ('id');
var btnAdicionar = document.getElementById('adicionar');
var btnListar = document.getElementById('listar');
var btnEditar = document.getElementById('editar');
var btnExcluir = document.getElementById('excluir');
var conteudoTabela = document.getElementById ('conteudo');
var pessoas = [] ;
var sexo = '';
var pessoasObj ;

btnAdicionar.addEventListener('click' , function() {
  var linhas = '';
  let autoIncremento = idIncremento();
  

  pessoas.push({
    id: autoIncremento,
    Nome: inputNome.value.toUpperCase(),
    Sexo: selectSexo.value.toUpperCase(),
    Status: selectStatus.value.toUpperCase()
    
});

  var jsonObj = JSON.stringify(pessoas);
  localStorage.setItem('pessoas', jsonObj);
  localStorage.setItem('identity', autoIncremento);
  var pessoasObj = JSON.parse(localStorage.getItem('pessoas'));

  console.log(pessoasObj)
})



function idIncremento(){
  let identity = localStorage.getItem('identity');
  if (identity == null){
      identity = 0;
  } else {
      identity = parseInt(identity);
  }
  return identity += 1;

}