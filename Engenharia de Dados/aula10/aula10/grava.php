<?php

function limpaCaracteresDocumento($documento) {
    return str_replace(['.', '-', ' ', ',', '/'], '', $documento);
}

$cpf = (isset($_POST['cpf'])) ? $_POST['cpf'] : '';
$cnpj = (isset($_POST['cnpj'])) ? $_POST['cnpj'] : '';

$cpflimpo = limpaCaracteresDocumento($cpf);
$cnpjlimpo = limpaCaracteresDocumento($cnpj);

var_dump($_POST);

echo $cpflimpo;
echo $cnpjlimpo;

$numero1 = $_POST['numero1'];
$numero2 = $_POST['numero2'];



$soma = 
$subtracao = 
$multiplicacao = 
$divisao = 

$resultadoSoma = calculo($soma)
$resultadoSubtracao = calculo($subtracao)
$resultadoMultiplicacao = calculo($multiplicacao)
$resultadoDivisao = calculo($divisao)