var nomeProduto = document.getElementById('nomeP');
var marcaProduto = document.getElementById('marcaP');
var valorProduto = document.getElementById('valorP');
var btnGravar = document.getElementById('gravar');
var btnLimpar = document.getElementById('limpar');
var table = document.getElementById('tabela');
var linhasTabela = document.getElementById('conteudo');
var Produtos = [];
var conteudoJSON;
var resultado;

btnGravar.addEventListener('click', function(){
    var linhas = "";
    let incrementado = incremental();

    if (produtoJaExiste(nomeProduto.value.toUpperCase())){
        alert ('Esse produto Ja está cadastrado!');
        return;
        }

    Produtos.push({
        idProduto: incrementado,
        Nome:nomeProduto.value.toUpperCase(),
        Marca: marcaProduto.value.toUpperCase(),
        Valor: parseFloat(valorProduto.value.toUpperCase())
    });

    conteudoJSON = (JSON.stringify(Produtos))
    localStorage.setItem('Produtos', conteudoJSON);
    localStorage.setItem('ID', incrementado);

    resultado = JSON.parse(localStorage.getItem('Produtos'));

    resultado.forEach((produto) => { // Mostra os valores no HTML
        linhas += `<tr>`
        linhas += `<td> ${produto.idProduto}</td>`
        linhas +=`<td>${produto.Nome}</td>`
        linhas +=`<td>${produto.Marca}</td>`
        linhas +=`<td>R$${produto.Valor}</td>`
        linhas += `<td><button onClick="excluir(${produto.idProduto})"">Excluir</button></td>`
        linhas +=` </tr>`
        });
        document.getElementById('conteudo').innerHTML = linhas;



    limpar();

});

btnLimpar.addEventListener('click', limpar());





function incremental(id){
    let indice = localStorage.getItem('ID');

    if (indice == null){
        indice = 0;
    } else {
        indice = parseInt(indice);
    }
    return indice += 1;
}

function produtoJaExiste(p){
    let produtoNaoAchado = JSON.parse(localStorage.getItem('Produtos'));
    if (produtoNaoAchado == null){
        return false;
    }

    let produtoAchado = Produtos.find((Item) => Item.Nome == p);
    return produtoAchado ? true : false;
}

function limpar(){
    nomeProduto.value = "";
    marcaProduto.value = "";
    valorProduto.value = "";
}

function excluir(id){
    let pProdutos = JSON.parse(localStorage.getItem('Produtos'));
    let novosProdutos = Produtos.find((item) => item.idProduto != id);

    localStorage.setItem('Produtos', JSON.stringify(novosProdutos));
}