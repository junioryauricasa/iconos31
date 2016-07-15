<?php 
print('<h2 class="p1">GESTIÓN DE STATUS</h2>');

$status_controller = new StatusController();
$status = $status_controller->get();