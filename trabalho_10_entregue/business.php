<?php include ('php/conectar.php') ?>
<?php


$pagina = 'business';

$sql = "SELECT conteudo FROM paginas WHERE nome = ?";
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
    <title>Business</title>
</head>
<body>

    <header role="banner" aria-label="Cabeçalho do site">
        <?php include('php/header.php'); ?>
    </header>

    <main role="main" id="conteudo-principal" tabindex="-1" aria-labelledby="titulo-principal">
        <section class="container py-4" aria-label="Conteúdo da página">
            <h1 id="titulo-principal" class="visually-hidden">Conteúdo principal</h1>
            <div>
                <?php echo $conteudo; ?>
            </div>
        </section>
    </main>

    <footer role="contentinfo" aria-label="Rodapé do site">
        <?php include('php/footer.php'); ?>
    </footer>

</body>
</html>

