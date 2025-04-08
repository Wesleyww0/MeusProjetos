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

var inputNome = document.getElementById ('nome');
var inputIdade = document.getElementById ('idade');
var inputAltura = document.getElementById ('altura');
var inputSalario = document.getElementById ('salario');
var selectCasado = document.getElementById ('casado');
var ckbPhp = document.getElementById ('php');
var ckbJavaScript = document.getElementById ('javascript');
var ckbJava = document.getElementById ('java');
var ckbCsharp = document.getElementById ('csharp');
var btnGravar = document.getElementById('gravar');
var btnExibir = document.getElementById('exibir');
var divResultado = document.getElementById('resultado');
var pessoa = {}

btnGravar.addEventListener('click', function () {

  loadObject()
  console.log(pessoa)
})

btnExibir.addEventListener('click', exibeDados) // não tem mais de uma função e não tem parametros

function loadObject(){
  pessoa.nome = inputNome.value
  pessoa.idade = parseInt (inputIdade.value)
  pessoa.altura = parseFloat (inputAltura.value)
  pessoa.salario = parseFloat (inputSalario.value)

  if (selectCasado == "sim"){
    pessoa.casado = true
  }else{
    pessoa.casado = false
  }

  pessoa.conhecimento = []

  if (ckbPhp.checked){
    pessoa.conhecimento.push(ckbPhp.value)
  }
  if (ckbJava.checked){
    pessoa.conhecimento.push(ckbJava.value)
  }
  if (ckbJavaScript.checked){
    pessoa.conhecimento.push(ckbJavaScript.value)
  }
  if (ckbCsharp.checked){
    pessoa.conhecimento.push(ckbCsharp.value)
  }
  

}

function exibeDados(){
  divResultado.innerHTML = `
  <p>Nome: ${pessoa.nome}</p>
  <p>Idade: ${pessoa.idade}</p>
  <p>Altura: ${pessoa.altura}</p>
  <p>Salário: ${pessoa.salario}</p>
  <p>casado: ${pessoa.casado}</p>
  <p>Conhecimento: ${pessoa.conhecimento.join(", ")}</p>
  `

}