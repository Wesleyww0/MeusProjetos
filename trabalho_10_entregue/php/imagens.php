<?php include('php/conectar.php') ?>
<?php


// Consulta para buscar as informações da imagem
$sql = "SELECT nome_arquivo, titulo, descricao FROM imagens WHERE id = 1"; // Exemplo: buscando imagem com ID 1
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $nome_arquivo = $row["nome_arquivo"];
    $titulo = $row["titulo"];
    $descricao = $row["descricao"];

    // Caminho base das imagens no servidor
    $caminho_base_imagens = "/uploads/"; // Certifique-se de que esta pasta existe e está acessível publicamente
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
</head>
<body>
    <h1><?php echo $titulo; ?></h1>
    <p><?php echo $descricao; ?></p>
    <img src="<?php echo $caminho_base_imagens . $nome_arquivo; ?>" alt="<?php echo $titulo; ?>">
</body>
</html>

<?php
} else {
    echo "Imagem não encontrada.";
}

$conn->close();
?>