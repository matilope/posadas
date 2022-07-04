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
$asunto = "Reserva turismo posadas";
$mensaje="<table style='margin:0 auto; background-color:rgb(0,128,0);color:white; padding:20px; border-radius:20px; width:auto; box-shadow:1px 1px 10px rgb(0,128,0);'>
<h1 style='text-align:center; color:rgb(0,128,0); text-transform:capitalize;'>¡Hola $nombre! Hemos recibido tu consulta correctamente</h1>
<tr>
    <th>Correo</th>
    <th>Actividades</th>
    <th>Fecha ida</th>
    <th>Fecha vuelta</th>
    <th>Consulta</th>
    <th>Imagen</th>
</tr>
<tr>
    <td>$email</td>";

for ($x = 1; $x < count($actividad); $x++) {
$mensaje.= $actividad[$x-1].", ";
	if($x+1==count($actividad)){
	$mensaje.= "<td>".$actividad[$x].".</td>";
 };
};

$mensaje.= "<td>".$fechaIda."</td><td>".$fechaVuelta."</td>";

if(strlen($consulta)>=1){
	$mensaje.= "<td>".$consulta."</td>";
}

$mensaje.= "<td><img src='https://posadasciudad.herokuapp.com/img/formulario".$imagen." alt='Imagen DNI'/>'</td></tr></table>";

$headers = "Mime-version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "To: $destinatario\r\n";


# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

// First, instantiate the SDK with your API credentials
$mg = Mailgun::create('cfde54b68d339230200befc7ceccef79-77985560-ccbed702'); // For US servers

// Now, compose and send your message.
// $mg->messages()->send($domain, $params);
$mg->messages()->send('sandbox53e4bca9c3c34c3eabe4ccf736994525.mailgun.org', [
  'from'    =>  "$email",
  'to'      => "$destinatario",
  'subject' => "$asunto",
  'html'    => "$mensaje"
]);

// mail($destinatario, $asunto, $mensaje, $headers);

header("Location: gracias.html");

?>
