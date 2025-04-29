// MDN WEB DOCS, boa para documentação de JavaScript

// 1 - For
// 2 - Foreach
// 3 - Map
// 4 - Filter
// 5 - Find
// 6 - Reduce
// a partir do 2, so funcina com array...  NomeDaArray.forEach()
// 

const pessoas = [
  {id: 1, nome: 'Vilma', idade: 19, sexo: 'F', salario: 2000},
  {id: 2, nome: 'Ramon', idade: 35, sexo: 'M', salario: 2100},
  {id: 3, nome: 'Fatima', idade: 55, sexo: 'F', salario: 1700},
  {id: 4, nome: 'Mario', idade: 67, sexo: 'M', salario: 2400},
  {id: 5, nome: 'Vilma', idade: 27, sexo: 'F', salario: 3000},
  {id: 6, nome: 'Rubinho', idade: 29, sexo: 'M', salario: 2600}

]

// exibir dados com FOR

for ( let i = 0; i < pessoas.length; i++) {
   const pessoa = pessoas[i]
   console.log (`ID: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}`)
}

// exibir dados com forEach
pessoas.forEach((pessoa) => console.log(pessoa.nome, + '' + pessoa.idade)) // variavel pessoa, so existe dentro do escopo do forEach.. não tem em outro lugar

// Map para criar novo Array // Map tranforma valores novos valores
const aumentoSalario = pessoas.map((p) => p.salario + 1000) // tem uma variavel indice opcional, apos o elemento, no filter tbm // tem um if e um return dentro dessa uma linha de codigo

console.log(aumentoSalario)

 // Filter para Filtrar o array // Filter filtra valores ja existentes
const pessoasIdadeMaiorQue30 = pessoas.filter((sabado) => {
  if( sabado.idade > 30) {
    return sabado
  }
}) 
console.log(pessoasIdadeMaiorQue30)

// Find retorna o primeiro elemento que satisfaz a condição
const pessoaIdadeMaiorIgual30 = pessoas.find((maracuja) => maracuja.idade >= 30)
console.log(pessoaIdadeMaiorIgual30)

// Reduce soma variaveis iguais, e exibie o total // tem mais elementos opcinais, como no map e no filter

const totalSalario = pessoas.reduce((soma, objetoAtual) => soma + objetoAtual.salario, 0 ) //Primeiro parametro é o elemento, o segundo é o indice // 0 é o valor que inicia a variavel Soma
console.log ('Total Salarios: ' + totalSalario)

let total = 0
for (let i = 0; i < pessoas.length; i++) {
  total += pessoas[i].salario
}
console.log('Total Salarios: ' + total)

