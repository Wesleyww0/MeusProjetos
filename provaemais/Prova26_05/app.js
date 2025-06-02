var inputTitulo = document.getElementById ('titulo');
var inputDescricao = document.getElementById ('descricao');
var selectPrioridade = document.getElementById ('selectPrioridade');
var btnGravar = document.getElementById('btnGravar');
var pCor = document.getElementById ('pCor');
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //alteração necessaria poise deixar vazio, faz com que ao cvarregar a pagina eu perca os dados quando tentar gravar novos

btnGravar.addEventListener('click' , function() {

    let idInput = document.getElementById('id').value;
    let autoIncremento = idIncremento();
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  
    if (idInput) {
        // Editar tarefa existente
        let index = tarefas.findIndex(tarefa => tarefa.id == idInput);
        if (index != -1) {
            tarefas[index] = {
                id: parseInt(idInput),
                Titulo: inputTitulo.value.toUpperCase(),
                Descricao: inputDescricao.value,
                Prioridade: selectPrioridade.value.toUpperCase()
            };
        }
    } else {
        // Adicionar nova tarefa
        tarefas.push({
            id: autoIncremento,
            Titulo: inputTitulo.value.toUpperCase(),
            Descricao: inputDescricao.value,
            Prioridade: selectPrioridade.value.toUpperCase()
        });
        localStorage.setItem('identity', autoIncremento);
    }

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    carregarTarefas();
    limpar();

    

  console.log(tarefas)
  
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
    document.getElementById('id').value = ""; // tive que adicionar para limpar o campo id que ficou apos aditar
    inputTitulo.value = "";
    inputDescricao.value = "";
    selectPrioridade.value = "baixa";
}

function editar(id){
    let edit = JSON.parse(localStorage.getItem('tarefas')) || [];
    let novoEdit = edit.find((novaTarefa)=> novaTarefa.id == id);

    if (novoEdit) {
        document.getElementById('id').value = novoEdit.id;
        inputTitulo.value = novoEdit.Titulo;
        inputDescricao.value = novoEdit.Descricao;
        selectPrioridade.value = novoEdit.Prioridade.toLowerCase();
    }
}





function excluir(id){
    let tTarefas = JSON.parse(localStorage.getItem('tarefas')) ;
    let novaTarefa = tTarefas.filter((tarefa) => tarefa.id != id);
    localStorage.setItem('tarefas', JSON.stringify(novaTarefa));
    carregarTarefas();
    
}

function carregarTarefas() {
    let tTarefas = localStorage.getItem('tarefas');
    let tarefasObj = tTarefas ? JSON.parse(tTarefas) : [];
    let html = "";

    // Mapeamento das prioridades para cores
    const coresPrioridade = {
        'baixa': 'bg-info-subtle',  // Verde claro
        'media': 'bg-warning-subtle',  // Amarelo claro
        'alta': 'bg-danger-subtle'    // Vermelho claro
    };

    tarefasObj.forEach((tarefa) => {
        // Obtém a cor correspondente à prioridade ou branco se não encontrado
        let corPrioridade = coresPrioridade[tarefa.Prioridade.toLowerCase()] || '#ffffff';

        html += `<tr>`;
        html += `<td>${tarefa.id}</td>`;
        html += `<td>${tarefa.Titulo}</td>`;
        html += `<td>${tarefa.Descricao}</td>`;
        html += `<td class="${corPrioridade}">${tarefa.Prioridade}</td>`;
        html += `<td>
                    <button class="btn btn-primary" onClick="editar(${tarefa.id})">Editar</button>
                    <button class="btn btn-danger" onClick="excluir(${tarefa.id})">Excluir</button>
                 </td>`;
        html += `</tr>`;
    });

    document.getElementById('conteudo').innerHTML = html;
}

carregarTarefas();



