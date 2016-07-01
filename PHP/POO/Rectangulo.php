<?php 
class Rectangulo extends PoligonoRegular {
	//ATRIBUTOS
	private $base;
	private $altura;

	//MÉTODOS
	public function __construct($b, $h) {
		$this->base = $b;
		$this->altura = $h;
		$this->lados = 4;
	}

	public function perimetro() {
		return ($this->base * 2) + ($this->altura * 2);
	}

	public function area() {
		return $this->base * $this->altura;
	}
}