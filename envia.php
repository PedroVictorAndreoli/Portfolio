<?php
    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $mensagem = addcslashes($_POST['mensagem']);

    $para = "pvandreoli@gmail.com";
    $assunto = "portfolio";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Mensagem: ".$email;

    $cabeca = "From: contatopao7@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("Email enviado");
    }else{
        echo("Erro");
    }
?>