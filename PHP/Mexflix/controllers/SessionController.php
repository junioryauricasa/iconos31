<?php
class SessionController {
	private $session;

	public function __construct() {
		$this->session = new UsersModel();
	}

	public function login($user, $pass) {
		return $this->session->login($user, $pass);
	}

	public function logout() {
		session_start();
		session_destroy();
		header('Location: ./');
	}

	public function __destruct() {
		unset($this);
	}
}