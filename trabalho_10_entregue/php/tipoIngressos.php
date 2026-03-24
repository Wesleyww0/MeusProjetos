
<?php
include('php/conectar.php');
$sql = "SELECT tipo, descricao FROM ingressos" ;
$result = $conn->query($sql);
?>

<main class="container my-5">

    <div class="row">
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
               echo "<div class='col-md-4'>";
                echo "<div class='text-center'>";
                echo "<p>" . $row['descricao'] . "</p>";
                echo "</div> </div>";
            }
        } else {
            echo "<p class='col-12'>Nenhum ingresso disponível.</p>";
        }

        $conn->close();
        ?>
    </div>
    <section class="my-5">
            <h2 class="fw-bold">Ingresso Gratuito, Acesso Exclusivo com Apresentação Física</h2>
            <p>Os ingressos para o Fatecon são gratuitos, mas para garantir seu acesso ao evento, é necessário imprimir o ingresso e apresentá-lo fisicamente na entrada. Essa medida é adotada para garantir o controle adequado de público e a segurança de todos os participantes.</p>
            <h2 class="fw-bold mt-4">Controle de acesso</h2>
            <p>Embora os ingressos sejam gratuitos, pedimos que, ao chegar ao evento, você apresente o ingresso impresso. Isso facilita o controle de entrada, garantindo uma melhor organização e segurança durante o evento. Certifique-se de ter seu ingresso impresso para evitar contratempos.</p>
    </section>
    </main>