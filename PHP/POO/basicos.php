<?php
/*
Comentario en PHP

Personal Home Pages (PHP)
Credor Rasmus Lerdoff

Originalmente no se penso como un lenguaje de programación:

3 formas de programar con PHP
	1. Como preprocesador de HTML
	2. PHP Estructurado
	3. PHP Orientado a Objetos
*/

$nombre = 'Jonathan';
$Nombre = 'Ulises';
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Básicos en PHP</title>
</head>
<body>
	<h1>
		Hola mi nombre es <?php echo $nombre; ?> <?=$Nombre?>
	</h1>
	<?php 
	//PHP como preprocesador
	echo '<h2>Hola mi nombre es $nombre</h2>';
	echo '<h2>Hola mi nombre es ' . $nombre . '</h2>';
	echo "<h2>Hola mi nombre es $nombre</h2>";
	echo "<h2>Hola mi nombre es \$nombre</h2>";
	//PHP Estructurado
	function saludar () {
		for ($i=1; $i < 7; $i++) { 
			echo '<h' . $i . '>Hola soy un encabezado de tipo '. $i . '</h'. $i . '>';
			echo "<h$i>Hola soy un encabezado de tipo $i</h$i>";
		}

		echo "
			<script>alert('hola')</script>
			<style>html { background-color: skyblue; }</style>
		";
	}

	saludar();
	//información de PHP y del servidor
	phpinfo();
	?>
</body>
</html>
