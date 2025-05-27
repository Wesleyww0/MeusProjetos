var inputTitulo = document.getElementById ('titulo');
var inputDescricao = document.getElementById ('descricao');
var selectPrioridade = document.getElementById ('selectPrioridade');
var btnGravar = document.getElementById('btnGravar');
var tarefas = [];
var pCor = document.getElementById ('pCor');

btnGravar.addEventListener('click' , function() {
   
    let autoIncremento = idIncremento();
    
  
    tarefas.push({
      id: autoIncremento,
      Titulo: inputTitulo.value.toUpperCase(),
      Descricao: inputDescricao.value,
      Prioridade: selectPrioridade.value.toUpperCase()
      
  });

  

  var jsonObj = JSON.stringify(tarefas);
  localStorage.setItem('tarefas', jsonObj);
  localStorage.setItem('identity', autoIncremento);
  var tarefasObj = JSON.parse(localStorage.getItem('tarefas'));

  carregarTarefas();

    limpar();


  console.log(tarefasObj)
  
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

  function limpar(){
    inputTitulo.value = "";
    inputDescricao.value = "";
    selectPrioridade.value = "baixa";
}

function editar(id){
    let edit = JSON.parse(localStorage.getItem('tarefas')) ;
    let novoEdit = edit.filter((novaTarefa)=> novaTarefa.id == id)

    inputTitulo.value = novoEdit.Titulo;
    inputDescricao.value = novoEdit.Descricao;
    selectPrioridade.value = novoEdit.Prioridade;

}



function excluir(id){
    let tTarefas = JSON.parse(localStorage.getItem('tarefas')) ;
    let novaTarefa = tTarefas.filter((tarefa) => tarefa.id != id);
    localStorage.setItem('tarefas', JSON.stringify(novaTarefa));
    localStorage.removeItem(tarefas);
    carregarTarefas();
    
}



function carregarTarefas() {
    
    let tTarefas = localStorage.getItem('tarefas');
   if (tTarefas){
    var tarefasObj = JSON.parse(tTarefas);
   } else {
    var tarefasObj = [];
   }
    let html = "";

    tarefasObj.forEach((tarefa) => {
        html += `<tr>`
        html += `<td> ${tarefa.id}</td>`
        html +=`<td>${tarefa.Titulo}</td>`
        html +=`<td>${tarefa.Descricao}</td>`
        html +=`<td id="pCor" class="bg-info">${tarefa.Prioridade}</td>`
        html += `<td><button class= "btn btn-primary" onClick="editar(${tarefa.id})"">Editar</button>
                       <button class= "btn btn-danger" onClick="excluir(${tarefa.id})"">Excluir</button></td>`
        html +=`</tr>`
        
       
        });

        
      

        
        document.getElementById('conteudo').innerHTML = html; 
   
}
carregarTarefas();



