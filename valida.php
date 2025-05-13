<?php 
$nome = isset($_POST['nome']) ? addslashes($_POST['nome']) : '';
$email = isset($_POST['email']) ? addslashes($_POST['email']) : '';
$numero = isset($_POST['numero']) ? addslashes($_POST['numero']) : '';
$texto = isset($_POST['texto']) ? addslashes($_POST['texto']) : '';
$mensagem = isset($_POST['textarea']) ? addslashes($_POST['textarea']) : '';

$para = "davisantoss.dev@gmail.com";  // Endereço de e-mail para onde você quer enviar os dados
$assunto = "📩 Coleta de Dados - Portfólio";  // Assunto do e-mail

$corpo = "
<strong>Nome:</strong> $nome <br>
<strong>Email:</strong> $email <br>
<strong>Telefone:</strong> $numero <br>
<strong>Assunto:</strong> $texto <br>
<strong>Mensagem:</strong> $mensagem
";

// Cabeçalho do e-mail, incluindo tipo de conteúdo HTML
$cabeca = "MIME-Version: 1.0" . "\r\n";
$cabeca .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$cabeca .= "From: $email" . "\r\n";  // E-mail do remetente
$cabeca .= "Reply-To: $email" . "\r\n";  // E-mail para onde as respostas irão
$cabeca .= "X-Mailer: PHP/" . phpversion();  // Identificação do servidor de e-mail

// Enviando o e-mail
if(mail($para, $assunto, $corpo, $cabeca)) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar a mensagem.";
}
?>
