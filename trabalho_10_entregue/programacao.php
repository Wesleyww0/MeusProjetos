<?php include ('php/conectar.php') ?>
<?php


$pagina = 'programacao';

$sql = "SELECT conteudo FROM paginas WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $pagina);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();


$conteudo = $row['conteudo'] ?? "";

$stmt->close();
$conn->close();
?>  

<!DOCTYPE html>
<html lang="pt-BR">
<head>
     <?php include('php/head.php');?>
    
    <title>Programação</title>

    </head>
<body>

    <header role="banner" aria-label="Cabeçalho do site">
        <?php include('php/header.php'); ?>
    </header>

    <main role="main" id="conteudo-principal" tabindex="-1" aria-label="Estrutura inicial da pagina">
            <?php echo $conteudo; ?>
        <section class="container py-4" aria-label="Conteudo principal da página">
            
            <?php include('php/noticiasProgramacao.php'); ?>
        </section>
    </main>

    <footer role="contentinfo" aria-label="Rodapé do site">
        <?php include('php/footer.php'); ?>
    </footer>

</body>
</html>
