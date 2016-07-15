<?php
class StatusModel extends Model {
	public $status_id;
	public $status;

	public function set($status_data = array()) {
		foreach ($status_data as $key => $value) {
			$$key = $value;
		}

		$this->sql = "REPLACE INTO status (status_id, status) VALUES ($status_id, '$status')";
		$this->set_query();
	}

	public function get($status_id = '') {
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

	public function del($status_id = '') {
		$this->sql = "DELETE FROM status WHERE status_id = $status_id";
		$this->set_query();
	}

	public function __destruct() {
		unset($this);
	}
}