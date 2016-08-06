<?php
class UsersModel extends Model {

	public function set($user_data = array()) {
		foreach ($user_data as $key => $value) {
			$$key = $value;
		}

		$this->sql = "REPLACE INTO users (user, email, name, birthday, pass, role) VALUES ('$user', '$email', '$name', '$birthday', MD5('$pass'), '$role')";
		$this->set_query();
	}

	public function get($user = '') {
		$this->sql = ($user != '')
			? "SELECT * FROM users WHERE user = '$user'"
			: "SELECT * FROM users";

		$this->get_query();

		$data = array();

		foreach ($this->rows as $key => $value) {
			array_push($data, $value);
		}

		return $data;
	}

	public function del($user = '') {
		$this->sql = "DELETE FROM users WHERE user = '$user'";
		$this->set_query();
	}

	public function login($user, $pass) {
		$this->sql = "SELECT * FROM users WHERE user = '$user' AND pass = MD5('$pass')";

		$this->get_query();

		$data = array();

		foreach ($this->rows as $key => $value) {
			array_push($data, $value);
		}

		return $data;
	}

	public function __destruct() {
		unset($this);
	}
}