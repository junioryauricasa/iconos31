<?php 
require_once('StatusModel.php');

echo '<h1>CRUD con MVC de la Tabla Status</h1>';

$status = new StatusModel();

$status_data = $status->read();
var_dump($status_data);