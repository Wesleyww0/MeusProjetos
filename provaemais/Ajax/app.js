var btnCEP = document.getElementById("consultarCEP")

btnCEP.addEventListener("click", async function(){
    let url = "https://viacep.com.br/ws/18136370/json/"

    let response = await fetch(url);

    console.log (response);

    let cep = await response.json();

    console.log(cep)

    //let objCep = JSON.parse(cep); // nao precisa pois o array ja chegou como Objeto

    console.log(cep.logradouro)
})

