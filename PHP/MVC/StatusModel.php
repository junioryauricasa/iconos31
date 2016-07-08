<?php
require_once('./Model.php');

class StatusModel extends Model {
	//Atributos
	public $status_id;
	public $status;

	//Métodos
	public function __construct() {

	}

	public function create($status_data = array()) {
		foreach ($status_data as $key => $value) {
			//Variables Variables
			//http://php.net/manual/es/language.variables.variable.php
			$$key = $value;
		}

		$this->sql = "INSERT INTO status SET status_id = $status_id, status = '$status'";
		$this->set_query();
	}

	public function read($status_id = '') {
		$this->sql = ($status_id != '')
			? "SELECT * FROM status WHERE status_id = $status_id"
			: "SELECT * FROM status";

		$this->get_query();

		$data = array();

		foreach ($this->rows as $key => $value) {
			array_push($data, $value);
		}

		return $data;
	}

	public function update($status_data = array()) {
		foreach ($status_data as $key => $value) {
			//Variables Variables
			//http://php.net/manual/es/language.variables.variable.php
			$$key = $value;
		}

		$this->sql = "UPDATE status SET status = '$status' WHERE status_id = $status_id";
		$this->set_query();
	}

	public function delete($status_id = '') {
		$this->sql = "DELETE FROM status WHERE status_id = $status_id";
		$this->set_query();
	}

	public function __destruct() {
		unset($this);
	}
}