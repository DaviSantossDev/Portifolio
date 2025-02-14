<?php 

$nome = addcslashes($_POST['nome']);
$email = addcslashes($_POST['email']);
$telefone = addcslashes($_POST['telefone']);
$texto = addcslashes($_POST['texto']);
$textarea = addcslashes($_POST['textarea']);


$para = "davisantoss.dev@gmail.com";
$assunto = "coleta de dados - portifolio";

$corpo = "nome: ".$nome."\n"."email: ".$email."\n"."telefone: ".$telefone."\n"."texto: ".$texto."\n"."textarea: ".$textarea;

$cabeca = "From: davisantos6679@gmai.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP".phpversion();

if(mail($para, $assunto, $corpo, $cabeca)){
    echo("e-mail enviado com sucesso");
}else{
    echo("houve um erro")
}

?>