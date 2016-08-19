<?php
class MovieSeriesModel extends Model {
	public function get($ms = '') {
		$this->sql = ($ms != '')
			? "SELECT ms.imdb_id, ms.title, ms.plot, ms.author, ms.actors, ms.country, ms.premiere, ms.poster, ms.trailer, ms.rating, ms.genres, ms.category, s.status FROM movieseries AS ms INNER JOIN status AS s ON ms.status = s.status_id WHERE ms.imdb_id = '$ms'"
			: "SELECT ms.imdb_id, ms.title, ms.plot, ms.author, ms.actors, ms.country, ms.premiere, ms.poster, ms.trailer, ms.rating, ms.genres, ms.category, s.status FROM movieseries AS ms INNER JOIN status AS s ON ms.status = s.status_id";

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