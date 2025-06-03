
var btnCEP = document.getElementById("btnConsultar");
var logradouro = document.getElementById("logradouro");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");

btnCEP.addEventListener("click", async function(){
 
    
    const inputCep = document.getElementById("inputCep").value;

    const url = "https://viacep.com.br/ws/" + inputCep +"/json/";


    console.log(url)

    let response = await fetch(url);

   

    let cep = await response.json();

    console.log(cep)

    //let objCep = JSON.parse(cep); // nao precisa pois o array ja chegou como Objeto

    console.log(cep.logradouro)
    console.log(cep.bairro)
    console.log(cep.localidade)

    logradouro.innerHTML = cep.logradouro
    bairro.innerHTML = cep.bairro
    cidade.innerHTML = cep.localidade
})

