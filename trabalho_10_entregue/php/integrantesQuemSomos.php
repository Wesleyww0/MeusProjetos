<?php include('php/conectar.php');
$sql = "SELECT conteudo_imagem, imagem_conteudo FROM quemsomos ";
$result = $conn->query($sql);
?>


<article>

        <?php
        if ($result->num_rows > 0) {
             while ($row = $result->fetch_assoc()){
            echo "<div class='row m-4 align-items-center'>";
            echo"<div class='col-12 col-lg-3 offset-lg-1 text-center order-lg-last'>";
            echo $row['conteudo_imagem'] ;
            echo "</div>";
            echo "<div class='col-12 col-lg-7'>";
            echo $row['imagem_conteudo'];
            echo "</div>  </div>";
            }
        } else {
            echo "<p>Informações institucionais não disponíveis no momento.</p>";
        }

        $conn->close();
        ?>
</article>