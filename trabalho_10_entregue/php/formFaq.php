<?php
date_default_timezone_set('America/Sao_Paulo');

$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$duvida = (isset($_POST['duvida'])) ? $_POST['duvida'] : '';

function sanitizarTexto($documento) {
    return str_replace(['.', '=', ',', '+', '-', '_', '*', '&', '%', '$', '*', '(', ')', '@', '!', '¨', '#', '~', ':', ';'], '', $documento);
}
function sanitizarEmail($documento) {
    return str_replace(['=', ',', '+', '-', '_', '*', '&', '%', '$', '*', '(', ')', '!', '¨', '#', '~', ':', ';'], '', $documento);
}

$emailLimpo = sanitizarEmail($email);
$duvidaLimpa = sanitizarTexto($duvida);

$printar = [
    'email' => $emailLimpo,
    'duvida' => $duvidaLimpa
];

$codigo = rand(0, 100);

if (! file_exists('Dados_form_Faq'))
    mkdir('Dados_form_Faq');

$recurso = fopen("Dados_form_Faq/dados{$codigo}.json", 'w');

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
            <a href="listarFaq.php" class="button button-form">Ver fichas de cadastro</a>
        </div>
    </div>
</main>
</body>
</html>