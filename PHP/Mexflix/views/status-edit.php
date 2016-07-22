<?php 
$status_controller = new StatusController();

if ( $_POST['r'] == 'status-edit' && !isset($_POST['crud']) ) {

	$status = $status_controller->get($_POST['status_id']);
	//var_dump($status);

	if( empty($status) ) {
		$template = '
			<div class="container">
				<p class="item error">No existe el status_id <b>%s</b></p>
			</div>
			<script>
				window.onload = function () {
					reloadPage("status");
				}
			</script>
		';

		printf($template, $_POST['status_id']);
	} else {
		$template_status = '
			<h2 class="p1">Editar Status</h2>
			<form method="POST" class="item">
				<div class="p_25">
					<input type="text" placeholder="status_id" value="%s" disabled>
					<input type="hidden" name="status_id" value="%s">
				</div>
				<div class="p_25">
					<input type="text" name="status" placeholder="status" value="%s" required>
				</div>
				<div class="p_25">
					<input type="submit" class="button edit" value="Editar">
					<input type="hidden" name="r" value="status-edit">
					<input type="hidden" name="crud" value="set">
				</div>
			</form>
		';

		printf(
			$template_status,
			$status[0]['status_id'],
			$status[0]['status_id'],
			$status[0]['status']
		);
	}

} else if ($_POST['r']=='status-edit' && $_POST['crud'] == 'set') {
	$new_status = array(
		'status_id' => 0,
		'status' => $_POST['status']
	);

	$status = $status_controller->set($new_status);

	$template = '
		<div class="container">
			<p class="item add">
				Status <b>%s</b> salvado
			</p>
		</div>
		<script>
			window.onload = function () {
				reloadPage("status");
			}
		</script>
	';

	printf($template, $_POST['status']);
}