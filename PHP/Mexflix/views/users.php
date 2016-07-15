<?php 
print('<h2 class="p1">GESTIÓN DE USUARIOS</h2>');

$users_controller = new UsersController();
$user = $users_controller->get();

if( empty($user) ) {
	print( '
		<div class="container">
			<p class="item  error">No hay Usuarios</p>
		</div>
	');
} else {
	$template_user = '
	<div class="item">
		<table>
			<tr>
				<th>User</th>
				<th>Email</th>
				<th colspan="2">
					<form method="POST">
						<input type="hidden" name="r" value="user-add">
						<input class="button  add" type="submit" value="Agregar">
					</form>
				</th>
			</tr>';
	for ($n=0; $n < count($user); $n++) { 
		$template_user .= '
			<tr>
				<td>' . $user[$n]['user'] . '</td>
				<td>' . $user[$n]['email'] . '</td>
				<td>
					<form method="POST">
						<input type="hidden" name="r" value="user-edit">
						<input type="hidden" name="status_id" value="' . $user[$n]['user'] . '">
						<input class="button  edit" type="submit" value="Editar">
					</form>
				</td>
				<td>
					<form method="POST">
						<input type="hidden" name="r" value="user-delete">
						<input type="hidden" name="status_id" value="' . $user[$n]['user'] . '">
						<input class="button  delete" type="submit" value="Eliminar">
					</form>
				</td>
			</tr>
		';
	}
	$template_user .= '
		</table>
	</div>
	';

	print($template_user);
}
