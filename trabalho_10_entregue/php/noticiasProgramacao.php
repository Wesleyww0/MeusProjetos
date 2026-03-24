<?php include('php/conectar.php') ?>
<?php

$sql = "SELECT titulo, conteudo_imagem, imagem_conteudo, data_hora FROM programacao ORDER BY data_hora ASC";
$result = $conn->query($sql);
?>

 <?php
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $dataFormatada = date("d/m/Y H:i", strtotime($row['data_hora']));
            echo "<div class='articleProgramacao'>";
            echo "<section class='m-5 sectionprogramacao'>";
            echo "<div class='row align-items-center'>";
            echo "<h5 class='card-title'>" . htmlspecialchars($row['titulo']) . "</h5>";

            echo "<p><strong>Data e hora:</strong> " . $dataFormatada . "</p>";
            echo "<div class='col-12 col-md-4 mb-4 mb-md-0'>" . $row['conteudo_imagem'] . "</div>";
            echo "<div class='col-12 col-md-8'>" . $row['imagem_conteudo'] . "</div>";
            echo "</div>";
            echo "</section>";
            echo "</div>";
            echo "<hr>";
        }
    } else {
        echo "<li>Sem programação disponível no momento.</li>";
    }

    $conn->close();
    ?>
        
