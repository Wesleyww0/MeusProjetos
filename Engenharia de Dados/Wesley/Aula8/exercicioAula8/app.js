const produtos = [
  {id: 1, nome: 'Produto1', preco: 10.2, categoria:'A', estoque: 100},
  {id: 2, nome: 'Produto2', preco: 20.5, categoria:'B', estoque: 1000},
  {id: 3, nome: 'Produto3', preco: 40.03, categoria:'A', estoque: 1},
  {id: 4, nome: 'Produto4', preco: 54.10, categoria:'B', estoque: 0},
  {id: 5, nome: 'Produto5', preco: 100.30, categoria:'A', estoque: 90},
  {id: 6, nome: 'Produto6', preco: 9.99, categoria:'C', estoque: 80},
]


// 
// Ex com For
// 1

for ( let i = 0; i < produtos.length; i++) {
  let LetraC = produtos[i]
  if (LetraC.categoria == 'C'){
    console.log(LetraC)
 }
}

console.log ('-----------------------------------------------------------')
// 2

for ( let i = 0; i < produtos.length; i++) {
  let Acima20Reais = produtos[i]
  if (Acima20Reais.preco > 20){
    console.log(Acima20Reais.nome)
  }
}

console.log ('-----------------------------------------------------------')
// 3  

for ( let i = 0; i < produtos.length; i++) {
  let Acima0Estoque = produtos[i]
  if (Acima0Estoque.estoque > 0){
    console.log(Acima0Estoque)
  }
}

console.log ('-----------------------------------------------------------')
// 4

for ( let i = 0; i < produtos.length; i++) {
  let idPar = produtos[i]
  if (idPar.id % 2 == 0 ){
    console.log(idPar)
  }
}

console.log ('-----------------------------------------------------------')
//5

for ( let i = 0; i < produtos.length; i++) {
  let primeiroProdutoA = produtos[i]
  if (primeiroProdutoA.categoria == 'A' ){
        break
  }
}
console.log(primeiroProdutoA)

console.log ('-----------------------------------------------------------')
// 6
for ( let i = 0; i < produtos.length; i++) {
  let descontoDe10 = produtos[i]
  descontoDe10.preco = ((descontoDe10.preco/100)*90)
 
    console.log(descontoDe10)    
  
}


// Ex com forEach
// 1

produtos.forEach((produtosC) => produtosC.categoria == "C" , console.log(produtos))
