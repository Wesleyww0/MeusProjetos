<!-- Geral do head -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- CSS e Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<link rel="stylesheet" href="css/css.css" />

<!-- JavaScript Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

<!-- Meta tags dinâmicas para Open Graph -->
<?php $nomePagina = basename($_SERVER['SCRIPT_NAME'], '.php'); ?>
<meta property="og:title" content="<?php echo ucfirst($nomePagina); ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://localhost/trabalho_08_entregue/<?php echo $nomePagina; ?>.php" />
<meta property="og:image" content="/imagens/imagemIndex.png" />
<meta property="og:description" content="Projeto integrador: <?php echo ucfirst($nomePagina); ?>" />
<meta property="og:site_name" content="Fatecon HQs" />
<meta property="og:locale" content="pt_BR" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo ucfirst($nomePagina); ?>" />
<meta name="twitter:description" content="Projeto integrador: <?php echo ucfirst($nomePagina); ?>" />
<meta name="twitter:image" content="/imagens/imagemIndex.png" />

<!-- Favicons -->
<link rel="icon" type="image/svg+xml" href="/imagens/icones/favicon.svg">
<link rel="icon" type="image/x-icon" sizes="any" href="/imagens/icones/favicon.ico">
<link rel="icon" type="image/png" href="/imagens/icones/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/imagens/icones/favicon-16x16.png" sizes="16x16">
<link rel="apple-touch-icon" href="/imagens/icones/apple-touch-icon.png">

<!-- Manifesto PWA -->
<link rel="manifest" href="/imagens/icones/site.webmanifest">
