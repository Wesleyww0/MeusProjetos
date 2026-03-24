<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/css.css" />
    <title>Cadastro</title>
</head>
<body class="bodyLeitura">
    <div class="container leitura">
        <?php
        $arquivo_recebido = filter_input(INPUT_GET, 'file', FILTER_SANITIZE_STRING);
        $pasta = './Dados_form_Faq/';
        $arquivo = $pasta . $arquivo_recebido;

        if ($arquivo_recebido && file_exists($arquivo)) {
            $recurso = fopen($arquivo, 'r');
            $json = fread($recurso, filesize($arquivo));
            fclose($recurso);
            $dados = json_decode($json);

                echo "<h1>Cadastro</h1>";
                echo "<div class='info'><span>E-mail:</span> " . htmlspecialchars($dados->email) . "</div>";
                echo "<div class='info'><span>Dúvida:</span> " . htmlspecialchars($dados->duvida) . "</div>";
        }
        ?>
        <div class="button-container button-container-leitura">
            <a href="./listarFaq.php" class="button button-leitura">Voltar</a>
        </div>
    </div>
</body>
</html>
