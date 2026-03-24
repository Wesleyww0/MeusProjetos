<?php

function lerArquivo($caminhoArquivo) {
    
    $recurso = fopen($caminhoArquivo, 'r');

    $json = fread($recurso, filesize($caminhoArquivo));

    fclose($recurso);

    return json_decode($json);
}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/livia/css/css.css" />
    <title>Lista</title>
</head>
<body class="bodyListar">
<h2>Lista de cadastros</h2>
<table>
    <thead>
        <tr>
            <th>Email</th>
            <th>Nome do Arquivo</th>
            <th>Última Modificação</th>
        </tr>
    </thead>
    <tbody>

    <?php
    date_default_timezone_set('America/Sao_Paulo');

    $pasta = './Dados_form_Faq';

        $arquivos = opendir($pasta);

        $html = '';
        while (($arquivo = readdir($arquivos))) {
            if ($arquivo != '.' && $arquivo != '..') {
                $caminhoArquivo = $pasta . '/' . $arquivo;
                $dados = lerArquivo($caminhoArquivo);

                $dataModificacao = date("d/m/Y H:i:s", filemtime($caminhoArquivo));

                    $html .= "<tr>
                                <td>$dados->email</td>
                                <td><a target='_blank' href='./leituraFaq.php?file=$arquivo'>$arquivo</a></td>
                                <td>$dataModificacao</td>
                            </tr>";
                }
            }

        // 4 - FECHAR O RECURSO
        closedir($arquivos);

        echo $html;
    ?>
    </tbody>
</table>
<div class="button-container listarButton">
    <a href="../index.php" class="button listar">Voltar para o início</a>
</div>
</body>
</html>
