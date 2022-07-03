<?php

$nombre = $_POST["nombre"];
$email = $_POST["correo"];
$fechaIda = $_POST["fechaIda"];
$fechaVuelta = $_POST["fechaVuelta"];
$imagen = $_FILES['imagen']['name']; 
$consulta = $_POST["mensaje"];
$actividad=$_POST['actividad'];

move_uploaded_file($_FILES['imagen']['tmp_name'], "img/formulario/".$imagen."");

$destinatario = "mati02171996@gmail.com";
$asunto = "Reserva tour";
$mensaje='
    <style>
        /* General */

        * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: "Roboto", sans-serif;
            margin: 0 auto;
        }

        ul {
            list-style: none;
            padding-left: 0px;
        }

        img {
            max-width: 100%;
            width: 400px;
        }

        h1 {
            font-size: 24px;
            text-align: center;
            color: rgb(0, 128, 0);
			margin-top: 24px;
			margin-bottom: 24px;
        }

        /* Header */

        header {
            width: auto;
            padding: 20px 10px;
            background-color: white;
            border-bottom: 1px solid #c8c8c8;
        }

        header>div {
            display: flex;
            justify-content: center;
        }

        header>div>a>div {
            background: url(img/logo.png) no-repeat;
            width: 300px;
            height: 50px;
        }

        li{
            padding:4px 0px;
        }

        li span {
            color: rgb(0, 128, 0);
            font-weight: bold;
        }

        /* Extras */

        .spandiv {
            font-size: 20px;
            text-align: center;
        }

        .spandiv::before {
            content: "\261B";
        }

        .spandiv:after {
            content: "\261A";
        }

        .bloque {
            margin: 0 auto;
            width: 400px;
            text-align: left;
            padding: 20px;
            background: white;
            border-radius: 20px;
            box-shadow: 1px 1px 10px rgb(0 128 0);
        }
		@media screen and (max-width:420px){
			.bloque{
				width:auto;
				margin: 6px;
			}
		}
    </style>
    <header>
        <div>
            <a href="index.html">
                <div></div>
            </a>
        </div>
    </header>';

$mensaje .= "<h1>¡Hola $nombre! Hemos recibido tu consulta correctamente</h1>
<div class='bloque'>
	<ul>
		<li><span>Correo: </span>$email</li>";

for ($x = 1; $x < count($actividad); $x++) {
$mensaje.= "<li><span>Actividades: </span>".$actividad[$x-1].", ";
	if($x+1==count($actividad)){
	$mensaje.= $actividad[$x].".</li>";
 };
};

$mensaje.= "<li><span>Fecha ida: </span>".$fechaIda."</li><li><span>Fecha vuelta: </span>".$fechaVuelta."</li>";

if(strlen($consulta)>=1){
	$mensaje.= "<li><span>Consulta: </span>".$consulta."</li>";
}

$mensaje.= "<li><img src='img/formulario/".$imagen."'/></li>";
$mensaje .= "</ul>
<div class='spandiv'><span> Te esperamos pronto </span></div>
</div>";

$headers = "Mime-version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "To: $destinatario\r\n";

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailgun.org';                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'postmaster@sandbox53e4bca9c3c34c3eabe4ccf736994525.mailgun.org';   // SMTP username
$mail->Password = '0fb187f35a1c7c1c0ef833e6df3760bb-77985560-71f4412c';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, only 'tls' is accepted

$mail->From = 'postmaster@sandbox53e4bca9c3c34c3eabe4ccf736994525.mailgun.org';
$mail->FromName = 'Cliente';
$mail->addAddress("$email");                 // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

$mail->Subject = 'Reserva turismo Posadas';
$mail->Body    = "$mensaje";

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}


// mail($destinatario, $asunto, $mensaje, $headers);

header("Location: gracias.html");

?>
