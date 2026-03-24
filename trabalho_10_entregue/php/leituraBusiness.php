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
        $pasta = './Dados_form_Business/';
        $arquivo = $pasta . $arquivo_recebido;

        if ($arquivo_recebido && file_exists($arquivo)) {
            $recurso = fopen($arquivo, 'r');
            $json = fread($recurso, filesize($arquivo));
            fclose($recurso);
            $dados = json_decode($json);

                echo "<h1>Cadastro</h1>";
                echo "<div class='info'><span>Nome:</span> " . htmlspecialchars($dados->nome) . "</div>";
                echo "<div class='info'><span>E-mail:</span> " . htmlspecialchars($dados->email) . "</div>";
                echo "<div class='info'><span>Telefone:</span> " . htmlspecialchars($dados->telefone) . "</div>";
                echo "<div class='info'><span>Setor:</span> " . htmlspecialchars($dados->setor) . "</div>";
                echo "<div class='info'><span>Mensagem:</span> " . htmlspecialchars($dados->mensagem) . "</div>";
        }
        ?>
        <div class="button-container button-container-leitura">
            <a href="./listarBusiness.php" class="button button-leitura">Voltar</a>
        </div>
    </div>
</body>
</html>