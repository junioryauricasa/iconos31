<?php 
require_once('./app/Model.php');
require_once('./app/MovieSeriesModel.php');

$bd = new MovieSeriesModel();

$ms = $bd->get();

$html = '';

for ($n=0; $n < count($ms); $n++) {
	$html .= '
		<article class="pelicula">
			<h2>' . $ms[$n]['title'] . '</h2>
			<img src="' . $ms[$n]['poster'] . '">
		</article>
	';
}

printf($html);