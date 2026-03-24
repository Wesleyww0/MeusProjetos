<?php include ('php/conectar.php') ?>
<?php

$pagina = 'localizacao';

$sql = "SELECT  conteudo FROM paginas WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $pagina);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();


$conteudo = $row['conteudo'] ?? "Conteúdo não encontrado.";

$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
     <?php include('php/head.php');?>
    <title>Localização</title>
</head>
<body>

    <header role="banner" aria-label="Cabeçalho do site">
        <?php include('php/header.php'); ?>
    </header>

    <main role="main" id="conteudo-principal" tabindex="-1" aria-label="Conteúdo principal">
        <section aria-label="Seção principal da página">
            <div class="container py-4">
                <?php echo $conteudo; ?>
            </div>
        </section>
    </main>

    <footer role="contentinfo" aria-label="Rodapé do site">
        <?php include('php/footer.php'); ?>
    </footer>

</body>
</html>

