// Json.Parse();
// StringIFY();

const pessoas = [
    {id: 1, nome: 'Vilma', idade: 19, sexo: 'F', salario: 2000.50},
    {id: 2, nome: 'Ramon', idade: 35, sexo: 'M', salario: 2100.00},
    {id: 3, nome: 'Fatima', idade: 55, sexo: 'F', salario: 1700.45},
    {id: 4, nome: 'Mario', idade: 67, sexo: 'M', salario: 2400.00},
    {id: 5, nome: 'Marlene', idade: 27, sexo: 'F', salario: 3000.10},
    {id: 6, nome: 'Rubinho', idade: 29, sexo: 'M', salario: 2600.99}
  
  ]

  

  var jsonObj = JSON.stringify(pessoas)
  localStorage.setItem('pessoas', jsonObj)

  var pessoasObj = JSON.parse(localStorage.getItem('pessoas'))


  console.log(pessoasObj) // para acompanhar

  pessoasObj.push( {id: 7, nome: 'Mauro', idade: 29, sexo: 'M', salario: 2799}) // usar push apenas em objeto.. quando tiver o objeto ou quando a string ja tiver sido tranformada em objeto
  pessoasObj.push( {id: 8, nome: 'Diana', idade: 28, sexo: 'F', salario: 6799.80})
// string <> objeto
  var html = ''
  pessoasObj.forEach(function (pessoa) {
    html += `<tr>`
    html += `<td>${pessoa.id}</td>`
    html += `<td>${pessoa.nome}</td>`
    html += `<td>${pessoa.idade}</td>`
    html += `<td>${pessoa.sexo}</td>`
    html += `<td>R$: ${pessoa.salario}</td>`
    html += `</tr>`
  })

  document.getElementById('linhas').innerHTML = html

  // quando não tem função de gatilho, click, onchange.. a função executa ao abrir a tela

  //var jsonObj = JSON.stringify(pessoas) // faz o JSON em letra maiuscula // tranforma objeto ou array de objetos em Json
  //console.log(jsonObj)

  //var objetos = JSON.parse(jsonObj) // -- ler usando os metodos da aula anterios.. 36 axercicios... // recebe string Json, tranforma em objeto
  //console.log(objetos)  


// ---------------

// LocalStorage

// criar
 // localStorage.setItem('Matéria', 'Programação para Sitios')
// exibir
  //var materia = localStorage.getItem('Matéria')
  //console.log(materia)
// remover itens
  //localStorage.removeItem('Matéria')
// criando e limpando ..., limpar

//localStorage.setItem('Matéria', 'Programação para Sitios')
//localStorage.setItem('Fatec', 'Segunda')

//localStorage.clear()


