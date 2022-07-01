<?php

$nombre = $_POST["nombre"];
$email = $_POST["correo"];

$actividad = $_POST["actividad"];

if(isset($_POST["actividad"])){
    foreach ($_POST['actividad'] as $actividad)
}

$fechaIda = $_POST["fechaIda"];
$fechaVuelta = $_POST["fechaVuelta"];
$imagen = $_FILES['imagen']['name']; 
$consulta = $_POST["mensaje"];

// move_uploaded_file($_FILES['imagen']['tmp_name'], "img/formulario/".$_FILES['imagen'].".jpg");

$destinatario = "matias.lopez@davinci.edu.ar";
$asunto = "Reserva tour";
$mensaje = "<style>ul{padding-left:none;} li::marker {color: rgb(0,128,0);}</style>¡Hola ".$nombre."!\r\n Hemos recibido tu consulta correctamente\r\n"."<ul><li>".$email."</li><li>".$actividad."</li><li>".$fechaIda."</li><li>".$fechaVuelta."</li><li>".$imagen."</li><li>".$consulta."</li></ul>";
$headers = "Mime-version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "To: $destinatario\r\n";

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = Mailgun::create('e612db25c17e600def010f135be95ae6-77985560-d7537b8f', 'https://posadasturismo.herokuapp.com');
$domain = "posadasturismo";
$params = array(
  'from'    => "Admin <app267667185@heroku.com>",
  'to'      => "$email",
  'subject' => "Reserva tour",
  'text'    => "$mensaje"
);

# Make the call to the client.
$mgClient->messages()->send($domain, $params);

header("Location: gracias.html");

// mail($destinatario, $asunto, $mensaje, $headers);

// include("connect.php");

// mysqli_query($conexion, "INSERT INTO formulario VALUES (DEFAULT, '$nombre', '$email', '$actividad', '$fechaIda', '$fechaVuelta', '$imagen', '$consulta')");

// $result = mysqli_query( $conexion, "SELECT * FROM formulario");

// while ($row = mysqli_fetch_row($result)){

// }

?>
