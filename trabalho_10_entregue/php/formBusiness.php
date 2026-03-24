<?php
date_default_timezone_set('America/Sao_Paulo');

$nome = (isset($_POST['nome'])) ? $_POST['nome'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$telefone = (isset($_POST['telefone'])) ? $_POST['telefone'] : '';
$setor =  (isset($_POST['setor'])) ? $_POST['setor'] : '';
$mensagem = (isset($_POST['mensagem'])) ? $_POST['mensagem'] : '';

function sanitizarTexto($documento) {
    return str_replace(['.', '=', ',', '+', '-', '_', '*', '&', '%', '$', '*', '(', ')', '@', '!', '¨', '#', '~', ':', ';'], '', $documento);
}
function sanitizarEmail($documento) {
    return str_replace(['=', ',', '+', '-', '_', '*', '&', '%', '$', '*', '(', ')', '!', '¨', '#', '~', ':', ';'], '', $documento);
}

$nomeLimpo = sanitizarTexto($nome);
$emailLimpo = sanitizarEmail($email);
$telefoneLimpo = sanitizarTexto($telefone);
$mensagemLimpa = sanitizarTexto($mensagem);

$printar = [
    'nome' => $nomeLimpo,
    'email' => $emailLimpo,
    'telefone' => $telefoneLimpo,
    'setor' => $setor,
    'mensagem' => $mensagemLimpa
];

$codigo = rand(0, 100);

if (! file_exists('Dados_form_Business'))
    mkdir('Dados_form_Business');

$recurso = fopen("Dados_form_Business/dados{$codigo}.json", 'w');

fwrite($recurso, json_encode($printar, JSON_UNESCAPED_UNICODE));

fclose($recurso);

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/css.css" />
    <title>Document</title>
</head>
<body class="bodyForm">
<main class="mainFormCadastro">
    <div class="mainForm">
        <h2>Obrigada por se cadastrar!</h2>
        <p><?= date('d/m/Y')?> - <?= date("H:i:s")?></p>
        <div class="button-container button-container-form ">
            <a href="listarBusiness.php" class="button button-form">Ver fichas de cadastro</a>
        </div>
    </div>
</main>
</body>
</html>