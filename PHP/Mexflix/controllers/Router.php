<?php 
class Router {
	public $route;

	public function __construct($route) {
		$this->route = isset( $_GET['r'] )
			? $_GET['r']
			: 'home';

		$controller = new ViewController();

		switch ($this->route) {
			case 'home': {
				$controller->load_view('home');
				break;
			}

			case 'status': {
				$controller->load_view('status');
				break;
			}

			case 'users': {
				$controller->load_view('users');
				break;
			}

			case 'movieseries': {
				$controller->load_view('movieseries');
				break;
			}
			
			default : {
				$controller->load_view('404');
				break;
			}
		}
	}

	public function __destruct() {
		unset($this);
	}
}