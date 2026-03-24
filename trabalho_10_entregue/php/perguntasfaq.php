<?php include ('php/conectar.php') ?>
<?php


$sql = "SELECT pergunta, resposta FROM faq";
$result = $conn->query($sql);
?>



<aside>
    <section>
        <h2 class="mb-4">Perguntas Frequentes</h2>
        <ul class="list-unstyled">
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<li><strong>" . htmlspecialchars($row['pergunta']) . "</strong></li>";
                    echo "<p>" . $row['resposta'] . "</p>";
                }
            } else {
                echo "<li>Nenhuma pergunta encontrada.</li>";
            }

            $conn->close();
            ?>
        </ul>
    </section>
</aside>