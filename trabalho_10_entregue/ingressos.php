<?php include ('php/conectar.php') ?>
<?php


$pagina = 'ingressos';

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
    <title>Ingressos</title>
</head>
<body>

    <header role="banner" aria-label="Cabeçalho do site">
        <?php include('php/header.php'); ?>
    </header>

    <main role="main" id="conteudo-principal" tabindex="-1" aria-label="Conteúdo principal da página">
        <section aria-label="Conteúdo dinâmico">
            <?php echo $conteudo; ?>
        </section>

        <section aria-label="Informações sobre os tipos de ingressos" class="mt-5">
            <div class="container">
                <?php include('php/tipoIngressos.php'); ?>
            </div>
        </section>
    </main>

    <footer role="contentinfo" aria-label="Rodapé do site">
        <?php include('php/footer.php'); ?>
    </footer>

</body>
</html>

