<?php
$conn = new mysqli("localhost", "root", "", "Site");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

?>

