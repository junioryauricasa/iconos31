<?php
//echo 'Los datos han pasado por el Servidor en PHP';
//echo 'Los datos han pasado por el Servidor en PHP, como este mensaje está en el servidor, no necesito recargar mi navegador para que AJAX consulte y actualice el contenido de manera asíncrona';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$cumple = $_POST['cumple'];
$asunto = $_POST['asunto'];
$comentarios = $_POST['comentarios'];

$res =  '<p>Los datos que enviaste son:<br>';
$res .= "Nombre: $nombre<br>";
$res .= "Email: $email<br>";
$res .= "Cumple: $cumple<br>";
$res .= "Asunto: $asunto<br>";
$res .= "Comentarios: $comentarios</p>";
$res .= '<input id="limpiar" type="button" value="Limpiar Formulario">';

print($res);