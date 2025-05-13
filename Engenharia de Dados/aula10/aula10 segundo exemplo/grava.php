<?php

function limpaCaracteresDocumento($documento) {
    return str_replace(['.', '-', ' ', ',', '/'], '', $documento);
}

function validaDocumento($documento, $tipoDocumento) {
    $doclimpo = limpaCaracteresDocumento($documento);

    if ($tipoDocumento == 'CPF') {
        return strlen($doclimpo) == 11;
    } else if ($tipoDocumento == 'CNPJ') {
        return strlen($doclimpo) == 14;
    }
}

function somaNumerosArray($p) {
    $acumulador=0;
    for ($i=0; $i < count($p); $i++) {
        $acumulador += intval($p[$i]);
    }
    return $acumulador;
}

$cpf = (isset($_POST['cpf'])) ? $_POST['cpf'] : '';
$cnpj = (isset($_POST['cnpj'])) ? $_POST['cnpj'] : '';

if (validaDocumento($cpf, 'CPF')) {
    echo "Seu CPF $cpf é válido!";
} else {
    echo "Seu CPF $cpf é inválido!";
}

$arrayNumeros = [34, 6, 1, 5656];

echo somaNumerosArray($arrayNumeros);