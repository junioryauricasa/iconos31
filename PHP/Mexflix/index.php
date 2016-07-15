<?php 
require_once('./models/Model.php');
require_once('./models/StatusModel.php');

$status = new StatusModel();

var_dump( $status->get() );