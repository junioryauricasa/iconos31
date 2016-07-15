<?php
class UsersModel extends Model {
	public $user;
	public $email;

	public function set($user_data = array()) {
		foreach ($user_data as $key => $value) {
			$$key = $value;
		}

		$this->sql = "REPLACE INTO users (user, email) VALUES ('$user', '$email')";
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

	public function del($user_id = '') {
		$this->sql = "DELETE FROM users WHERE user = '$user'";
		$this->set_query();
	}

	public function __destruct() {
		unset($this);
	}
}