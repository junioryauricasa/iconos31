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

	}

	public function __destruct() {
		unset($this);
	}
}