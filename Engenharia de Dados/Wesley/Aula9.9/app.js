// Função para carregar os dados do localStorage ao carregar a página
window.onload = function() {
    carregarDados();
  };
  const btnGravar = document.getElementById('btnGravar');
  const modeloInput = document.getElementById('modelo');
  const placaInput = document.getElementById('placa');
  // Função para adicionar um carro
  function Gravar() {
    
   
    const modelo = modeloInput.value.trim();
    const placa = placaInput.value.trim();
  
    if (modelo == '' || placa == '') {
      alert('Por favor, preencha ambos os campos.');
      return;
    }
  
   
    
  
    // Criar objeto do carro
    const carro = { modelo: modelo, placa: placa };
  
    // Obter os dados existentes do localStorage ou criar um array vazio
    let carros = JSON.parse(localStorage.getItem('carros')) || []; // as duas parras segnificam OU
  
    // Adicionar o novo carro ao array
    carros.push(carro);
  
    // Salvar de volta no localStorage
    localStorage.setItem('carros', JSON.stringify(carros));
  
    // Adicionar na tabela
    adicionarNaTabela(carro);
  
    // Limpar os inputs
    modeloInput.value = '';
    placaInput.value = '';
  }
  btnGravar.addEventListener('click', function() {
   Gravar()
  console.log(btnGravar);
  });
  
  // Função para adicionar uma linha na tabela
  function adicionarNaTabela(carro) {
    const tbody = document.getElementById('tabelaCarros').getElementsByTagName('tbody')[0];
  
    const linha = document.createElement('tr');
  
    const celulaModelo = document.createElement('td');
    celulaModelo.textContent = carro.modelo;
    linha.appendChild(celulaModelo);
  
    const celulaPlaca = document.createElement('td');
    celulaPlaca.textContent = carro.placa;
    linha.appendChild(celulaPlaca);
  
    tbody.appendChild(linha);
  }
  
  // Função para carregar os dados do localStorage ao iniciar
  function carregarDados() {
    const carros = JSON.parse(localStorage.getItem('carros')) || [];
    carros.forEach(function(carro) {
        adicionarNaTabela(carro);
      });
    }
  