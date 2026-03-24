<?php include ('php/conectar.php') ?>
<?php


$pagina = 'index';

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
    <title>Home</title>
</head>
<body>
    
    <header role="banner" aria-label="Cabeçalho principal do site">
        <?php include('php/header.php'); ?>
    </header>

    <main role="main" id="conteudo-principal" tabindex="-1" aria-labelledby="titulo-principal">
        <section aria-label="Conteúdo dinâmico da página">
            <div class="container py-4">
                <h1 id="titulo-principal" class="visually-hidden">Conteúdo principal</h1>
                <?php echo $conteudo; ?>
            </div>
        </section>
    </main>

    <footer role="contentinfo" aria-label="Rodapé com informações de contato e navegação adicional">
        <?php include('php/footer.php'); ?>
    </footer>



</body>
</html>
