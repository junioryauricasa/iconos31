<?php 
/*
Tipos de clases en PHP:
	Instanciables
		Ser instanciada (se pueden crear objetos) y/o se pueden heredar
	Heredadas
		Guardar relación con métodos y atributos de otra
	Finales
		Es Instanciables pero no se puede heredar
	Abstractas
		Sirven de modelo para otras, NO se pueden instanciar y DEBEN heredarse
*/
require('./PoligonoRegular.php');
require('./Cuadrado.php');
require('./Rectangulo.php');

echo '
	<h1>Polígonos</h1>
	<p>Figura geométrica plana que está limitada por tres o más rectas y tiene tres o más ángulos y vértices.</p>
	<h2>Perímetro</h2>
	<p>El perímetro de un polígono es igual a la suma de las longitudes de sus lados.</p>
	<h2>Área</h2>
	<p>El área de un polígono es la medida de la región o superficie encerrada por un polígono.</p>
	<hr>
';

echo '<h2>Cuadrado</h2>';
$cuadrado = new Cuadrado(5);

echo '<p>El perímetro de mi cuadrado es: ' . $cuadrado->perimetro() . ' el área es: ' . $cuadrado->area() . '</p>';

echo '<h2>Rectángulo</h2>';
$rectangulo = new Rectangulo(5, 8);

echo '<p>El perímetro de mi rectángulo es: ' . $rectangulo->perimetro() . ' el área es: ' . $rectangulo->area() . '</p>';