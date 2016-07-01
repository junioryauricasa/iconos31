<?php 
class Telefono {
	public $marca;
	public $modelo;
	protected $medio = 'alámbrico';
	protected $transmision = 'analógica';

	public function __construct($marca, $modelo) {
		$this->marca = $marca;
		$this->modelo = $modelo;
	}

	public function llamar() {
		echo '<p>Riiing Riiiing!!!</p>';
	}

	public function imprime_info() {
		echo '
			<ul>
				<li>' . $this->marca . '</li>
				<li>' . $this->modelo . '</li>
				<li>' . $this->medio . '</li>
				<li>' . $this->transmision . '</li>
			</ul>
		';
	}
}

class Celular extends Telefono {
	protected $medio = 'inalámbrico';
	protected $transmision = 'digital';

	public function __construct($marca, $modelo) {
		parent::__construct($marca, $modelo);
	}

	public function vibrar() {
		echo '<p>BRRR BRRR!!!</p>';
	}
}

final class SmartPhone extends Celular {
	public $datos  = 'Tengo Internet';

	public function __construct($marca, $modelo) {
		parent::__construct($marca, $modelo);
	}

	public function imprime_info() {
		echo '
			<ul>
				<li>' . $this->marca . '</li>
				<li>' . $this->modelo . '</li>
				<li>' . $this->medio . '</li>
				<li>' . $this->transmision . '</li>
				<li>' . $this->datos . '</li>
			</ul>
		';
	}
}

//class TelephaticPhone extends SmartPhone {}

/* ********************************************* */
echo '<h1>Evolución del Teléfono</h1>';
echo '<h2>Teléfono:</h2>';
$tel_casa = new Telefono('Panasonic', 'KX-TS550');
$tel_casa->llamar();
$tel_casa->imprime_info();


echo '<h2>Celular:</h2>';
$mi_cel = new Celular('Nokia', '5120');
$mi_cel->llamar();
$mi_cel->vibrar();
$mi_cel->imprime_info();


echo '<h2>SmartPhone:</h2>';
$mi_sp = new SmartPhone('Motorola', 'G4');
$mi_sp->llamar();
$mi_sp->vibrar();
$mi_sp->imprime_info();