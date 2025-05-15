<?php 
$nome = isset($_POST['nome']) ? addslashes($_POST['nome']) : '';
$email = isset($_POST['email']) ? addslashes($_POST['email']) : '';
$numero = isset($_POST['numero']) ? addslashes($_POST['numero']) : '';
$texto = isset($_POST['texto']) ? addslashes($_POST['texto']) : '';
$mensagem = isset($_POST['textarea']) ? addslashes($_POST['textarea']) : '';

$para = "davisantoss.dev@gmail.com";
$assunto = "📩 Coleta de Dados - Portfólio";

$corpo = "
<strong>Nome:</strong> $nome <br>
<strong>Email:</strong> $email <br>
<strong>Telefone:</strong> $numero <br>
<strong>Assunto:</strong> $texto <br>
<strong>Mensagem:</strong> $mensagem
";

$cabeca = "MIME-Version: 1.0" . "\r\n";
$cabeca .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$cabeca .= "From: $email" . "\r\n";
$cabeca .= "Reply-To: $email" . "\r\n";
$cabeca .= "X-Mailer: PHP/" . phpversion();


?>