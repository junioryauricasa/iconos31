<?php 
class Cuadrado extends PoligonoRegular {
	//ATRIBUTOS
	private $lado;

	//MÉTODOS
	public function __construct($longitud) {
		$this->lado = $longitud;
		$this->lados = 4;
	}

	public function perimetro() {
		return $this->lado * $this->lados;
	}

	public function area() {
		return pow($this->lado, 2);
	}
}