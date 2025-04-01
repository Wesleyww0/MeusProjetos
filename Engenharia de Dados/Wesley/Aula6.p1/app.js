var btnAbrir = document.getElementById('btnAbrir');
var btnSalvar = document.getElementById('btnSalvar');
var inputDescricaoDoProduto = document.getElementById('descricaoDoProduto');
var inputCategoria = document.getElementById('categoria');
var inputValorAVista = document.getElementById('valorAVista');
var inputValorAPrazo = document.getElementById('valorAPrazo');
var inputDescricaoDoServico = document.getElementById('descricaoDoServico');
var inputValorEmPecas = document.getElementById('valorEmPecas');
var inputValorMaoDeObra = document.getElementById('valorMaoDeObra');
var selectTipo = document.getElementById('selectTipo');
var selectTipo1 = document.getElementById('selectTipo1');
var selectTipo2 = document.getElementById('selectTipo2');
var msgGeral = document.getElementsByClassName('msg-geral')[0];

btnAbrir.addEventListener('click', function () {
    if (selectTipo.value == 1) {
        selectTipo1.classList.remove('esconder');
        selectTipo1.classList.add('exibir');
        selectTipo2.classList.remove('exibir');
        selectTipo2.classList.add('esconder');
    } else if (selectTipo.value == 2) {
        selectTipo2.classList.remove('esconder');
        selectTipo2.classList.add('exibir');
        selectTipo1.classList.remove('exibir');
        selectTipo1.classList.add('esconder');
    }
    else {
        selectTipo1.classList.remove('exibir');
        selectTipo1.classList.add('esconder');
        selectTipo2.classList.remove('exibir');
        selectTipo2.classList.add('esconder');
        msgGeral.classList.remove('exibir');
        msgGeral.classList.add('esconder');
    }
})

btnSalvar.addEventListener('click', function () {
    msgGeral.innerHTML = 'Erro:';
     
    if (selectTipo1.classList == 'exibir') {
        msgGeral.classList.remove('exibir');
        msgGeral.classList.add('esconder');
        inputValorAPrazo.classList.remove('esconder');
        inputValorAPrazo.classList.add('exibir');
        msgGeral.style.backgroundColor =  'rgb(242, 216, 216)';
        msgGeral.style.color = 'red';
        
        //DescricaoDoProduto
        if (inputDescricaoDoProduto.value == '') {
            inputDescricaoDoProduto.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Descrição!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Descricao não informado!');
        } else {
            inputDescricaoDoProduto.style.border = '3px solid green';
            
            console.log('Descricao informado ' + inputDescricaoDoProduto.value);
        }

        //categoria
        if (inputCategoria.value == '') {
            inputCategoria.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Categoria!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Categoria não informado!');
        } else {
            inputCategoria.style.border = '3px solid green';
            
            console.log('categoria informado ' + inputCategoria.value);
        }

        //ValorAVista
        if (inputValorAVista.value == ''){
            inputValorAVista.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Valor a vista!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Valor A vista não informado!');

        }else if (isNaN(inputValorAVista.value)) { // isNan Verifica se é numero ou texto.. se for diferente de umero ele retorna positivo, se for numero ele retorna negativo e desce para o else
            msgGeral.innerHTML += '<br> # Informar numero no Valor!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('O Valor A vista não é um numero!');
        }else {
            inputValorAVista.style.border = '3px solid green';            
            console.log('Valor a vista informado ' + inputValorAVista.value);
        }

        // Valor à Prazo

        if (inputValorAPrazo.value == ''){
            inputValorAPrazo.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Valor A Prazo!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Valor A Prazo não informado!');

        }else if (isNaN(inputValorAPrazo.value)) { // isNan Verifica se é numero ou texto.. se for diferente de umero ele retorna positivo, se for numero ele retorna negativo e desce para o else
            msgGeral.innerHTML += '<br> # Informar numero no Valor!';
            inputValorAVista.style.border = '3px solid red';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('O Valor A prazo não é um numero!');
        }else if (inputValorAVista.value > 1000) {
            var Valor = (inputValorAVista.value);
            inputValorAPrazo.value = PorcentagemPagamentoAPrazo(Valor);            
            inputValorAPrazo.style.border = '3px solid green';            
            console.log('Valor a prazo informado ' + inputValorAPrazo.value);
        }

        
       

        // msg de sucesso
        if(inputDescricaoDoProduto.style.border == '3px solid green'&& inputCategoria.style.border == '3px solid green'&& inputValorAVista.style.border == '3px solid green'&& inputValorAPrazo.style.border == '3px solid green'){
            msgGeral.innerHTML = '<br><br> Sucesso!';
            msgGeral.style.backgroundColor = 'lightgreen';
            msgGeral.style.color = 'green';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
        }
    

    }else if (selectTipo2.classList == 'exibir') {
        msgGeral.classList.remove('exibir');
        msgGeral.classList.add('esconder');
        msgGeral.style.backgroundColor =  'rgb(242, 216, 216)';
        msgGeral.style.color = 'red';

        //DescricaoDoServico
        if (inputDescricaoDoServico.value == '') {
            inputDescricaoDoServico.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Descrição!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Descricao não informado!');
        } else {
            inputDescricaoDoServico.style.border = '3px solid green';
            
            console.log('Descricao informado ' + inputDescricaoDoServico.value);
        }

        //ValorEmPecas
        if (inputValorEmPecas.value == ''){
            inputValorEmPecas.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Valor!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Valor Das Peças não informado!');

        }else if (isNaN(inputValorEmPecas.value)) { // isNan Verifica se é numero ou texto.. se for diferente de umero ele retorna positivo, se for numero ele retorna negativo e desce para o else
            msgGeral.innerHTML += '<br> # Informar numero no Valor das peças!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('O Valor Das peças não é um numero!');
        }else {
            inputValorEmPecas.style.border = '3px solid green';            
            console.log('Valor das Peças informado ' + inputValorEmPecas.value);
        }

        //Valor Mao De Obra
        if (inputValorMaoDeObra.value == ''){
            inputValorMaoDeObra.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar Valor Da Mão De Obra!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('Valor Da Mão De obra não informado!');

        }else if (isNaN(inputValorMaoDeObra.value)) { // isNan Verifica se é numero ou texto.. se for diferente de umero ele retorna positivo, se for numero ele retorna negativo e desce para o else
            inputValorMaoDeObra.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Informar numero no Valor da Mão De Obra!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('O Valor Da Mão De Obra não é um numero!');
        }else if (parseFloat(inputValorMaoDeObra.value) > parseFloat(inputValorEmPecas.value/2)){
            inputValorMaoDeObra.style.border = '3px solid red';
            msgGeral.innerHTML += '<br> # Valor da Mão de Obra Excedente!';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            console.log('O Valor Da Mão De Obra está excedente!');
        }else {
            inputValorMaoDeObra.style.border = '3px solid green';            
            console.log('Valor da Mao De Obra informado ' + inputValorMaoDeObra.value);
        }

        if(inputDescricaoDoServico.style.border == '3px solid green'&& inputValorEmPecas.style.border == '3px solid green'&& inputValorMaoDeObra.style.border =='3px solid green'){
            msgGeral.innerHTML = '<br><br> Sucesso!';
            msgGeral.style.backgroundColor = 'lightgreen';
            msgGeral.style.color = 'green';
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
        }
    }

})


 // fuunções // 

 function PorcentagemPagamentoAPrazo(Valor){
    return ((Valor/100)*5);

}

