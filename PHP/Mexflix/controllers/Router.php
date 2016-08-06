<?php 
class Router {
	public $route;

	public function __construct($route) {
		//http://php.net/manual/es/function.session-start.php
		//http://php.net/manual/es/session.configuration.php
		if( !isset($_SESSION) ) {
			session_start();
		}

		if( !isset($_SESSION['ok']) ) {
			$_SESSION['ok'] = false;
		}

		if ( $_SESSION['ok'] ) {
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
		} else {
			if ( !isset($_POST['user']) && !isset($_POST['pass']) ) {
				$login_form = new ViewController();
				$login_form->load_view('login');
			} else {
				$user_session = new SessionController();
				$session = $user_session->login(
					$_POST['user'],
					$_POST['pass']
				);

				if ( empty($session) ) {
					$login_form = new ViewController();
					$login_form->load_view('login');
					header('Location: ./?error=El usuario y password proporcionados no coinciden');
				} else {
					$_SESSION['ok'] = true;

					foreach ($session as $key) {
						$_SESSION['user'] = $key['user'];
						$_SESSION['email'] = $key['email'];
						$_SESSION['name'] = $key['name'];
						$_SESSION['birthday'] = $key['birthday'];
						$_SESSION['pass'] = $key['pass'];
						$_SESSION['role'] = $key['role'];
					}

					header('Location: ./');
				}
			}
		}
	}//cierra el constructor

	public function __destruct() {
		unset($this);
	}
}