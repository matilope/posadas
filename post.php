<?php

$nombre = $_POST["nombre"];
$email = $_POST["correo"];
$fechaIda = $_POST["fechaIda"];
$fechaVuelta = $_POST["fechaVuelta"];
$imagen = $_FILES['imagen']['tmp_name']; 
$consulta = $_POST["mensaje"];
$actividad=$_POST['actividad'];

// move_uploaded_file($_FILES['imagen']['tmp_name'], "img/formulario/".$imagen);

$destinatario = "mati02171996@gmail.com";
$asunto = "Reserva turismo posadas";
$mensaje="<table style='margin: 0 auto; width: 360px; background-color: rgb(237, 237, 237); color: #000000; padding: 20px; border-radius: 20px; border: 1px solid #007e0fdb;'>
<caption style='text-align:center; color:rgb(0,128,0); text-transform:capitalize; font-size:20px; margin-bottom:10px;'>¡Has recibido una reserva de $nombre!</caption>
<tbody>
<tr>
    <th style='vertical-align: top; text-align: left;'>Correo</th>
    <td>$email</td>
</tr>
<tr><th style='vertical-align: top; text-align: left;'>Actividades</th><td>";


for ($x = 1; $x < count($actividad); $x++) {
$mensaje.= $actividad[$x-1].", ";
	if($x+1==count($actividad)){
	$mensaje.= $actividad[$x].".";
 };
};

$mensaje.= "</td></tr><tr><th style='vertical-align: top; text-align: left;'>Fecha ida</th><td>".$fechaIda."</td></tr><tr><th style='vertical-align: top; text-align: left;'>Fecha vuelta</th><td>".$fechaVuelta."</td></tr>";

if(strlen($consulta)>=1){
	$mensaje.= "<tr><th style='vertical-align: top; text-align: left;'>Consulta</th><td>".$consulta."</td></tr>";
}

$mensaje .= "</tbody></table>";

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
  'from'    =>  $email,
  'to'      => $destinatario,
  'subject' => $asunto,
  'html'    => $mensaje,
  'attachment' => [['filePath'=>$imagen, 'filename'=>'imagen_dni.jpg']]
]);

// mail($destinatario, $asunto, $mensaje, $headers);

header("Location: gracias.html");

?>
