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
				if( !isset($_POST['r']) ) {
					$controller->load_view('status');
				} else if( $_POST['r'] == 'status-add' ) {
					$controller->load_view('status-add');
				} else if( $_POST['r'] == 'status-edit' ) {
					$controller->load_view('status-edit');
				} else if( $_POST['r'] == 'status-delete' ) {
					$controller->load_view('status-delete');
				}
				break;
			}

			case 'users': {
				if( !isset($_POST['r']) ) {
					$controller->load_view('users');
				} else if( $_POST['r'] == 'user-add' ) {
					$controller->load_view('user-add');
				} else if( $_POST['r'] == 'user-edit' ) {
					$controller->load_view('user-edit');
				} else if( $_POST['r'] == 'user-delete' ) {
					$controller->load_view('user-delete');
				}
				break;
			}

			case 'movieseries': {
				if( !isset($_POST['r']) ) {
					$controller->load_view('movieseries');
				} else if( $_POST['r'] == 'movieserie-show' ) {
					$controller->load_view('movieserie-show');
				} else if( $_POST['r'] == 'movieserie-add' ) {
					$controller->load_view('movieserie-add');
				} else if( $_POST['r'] == 'movieserie-edit' ) {
					$controller->load_view('movieserie-edit');
				} else if( $_POST['r'] == 'movieserie-delete' ) {
					$controller->load_view('movieserie-delete');
				}
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