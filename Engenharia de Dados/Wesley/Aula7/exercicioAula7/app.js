// Objetos
// Chave: Valor   -- Colunas: Celulas

// Não precisa especificar tipagem.. string tem aspas duplas, inteiro nao tem ponto, float tem casas decimais, logico true/false
// Nome: "João"   --   Idade: 20   --   Altura: 1.80   --   Casado: True   --   
// Conhecimentos ["PHP", "Java", "JS", "SQL"]     "Matriz.."


//Var pessoa = {// Nome: "João",
//                 Idade: 20,
//                 Altura: 1.80,
//                 Casado: True ,    
//                 Conhecimentos ["PHP", "Java", "JS", "SQL"        --   "Matriz.."
//              ]}

//var pessoa = { Nome: "João",
//                   Idade: 20,
 //                  Altura: 1.80,
   //                Salario: 10000,
     //              Casado: true ,    
       //            Conhecimentos: ["JavaScript", "Python", "Java"       
         //     ]
  //          }

            //console.log(pessoa)
//console.log(pessoa.Nome)
//console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.Idade}`)

//pessoa.Salario = pessoa.Salario + 500;
//console.log(`Salario: ${pessoa.Salario}`) // mais legivel
//console.log("Salario" + pessoa.Salario) também funciona, muita concatenação

var inputId = document.getElementById ('id');
var inputDescricao = document.getElementById ('descricao');
var ckbValor100 = document.getElementById ('valor100');
var ckbValor150 = document.getElementById ('valor150');
var ckbValor130 = document.getElementById ('valor130');
var ckbBebidas = document.getElementById ('bebidas');
var ckbMercearia = document.getElementById ('mercearia');
var btnGravar = document.getElementById('gravar');
var btnExibir = document.getElementById('exibir');
var divResultado = document.getElementById('resultado');
var produto = {}

btnGravar.addEventListener('click', function () {

  loadObject()
  console.log(produto)
})

btnExibir.addEventListener('click', exibeDados) // não tem mais de uma função e não tem parametros

function loadObject(){
  produto.id =parseInt (inputId.value)
  produto.descricao = inputDescricao.value
  

 

  produto.TabelaValores = []

  if (ckbValor100.checked){
    produto.TabelaValores.push(ckbValor100.value)
  }
  if (ckbValor150.checked){
    produto.TabelaValores.push(ckbValor150.value)
  }
  if (ckbValor130.checked){
    produto.TabelaValores.push(ckbValor130.value)
  }
 

  produto.Categorias = []

  if (ckbBebidas.checked){
    produto.Categorias.push(ckbBebidas.value)
  }
  if (ckbMercearia.checked){
    produto.Categorias.push(ckbMercearia.value)
  }
  

}

function exibeDados(){
  divResultado.innerHTML = `
  Produto -- <br>
  <p>Id: ${produto.id}</p>
  <p>Descrição: ${produto.descricao}</p>
  <p>Tabelavalores: ${produto.TabelaValores.join(", ")}</p>
  <p>Categorias: ${produto.Categorias.join(", ")}</p>
  `

}