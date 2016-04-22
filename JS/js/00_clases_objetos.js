//comentario de una linea
/*
comentarios
multilinea
*/
//función anónima autoejecutable
(function (d, w, n) {
	//console.log(d, w, n);

	//Objeto literal
	var perro = {
		nombre : 'kEnAi',
		edad : 3,
		raza : 'Criollo',
		esterilizado : true,
		genero : 'Macho',
		ladrar : function () {
			alert('guau guau!');
		},
		morder : function (cosa) {
			//concatenación
			alert('Voy a morder ' + cosa);
		},
		aparecer : function (imagen) {
			d.write('<img src="' + imagen +'">');
		}
	};
	
	console.log(
		perro.nombre,
		perro.edad,
		perro.genero,
		perro.esterilizado,
		perro.raza
	);

	perro.ladrar();
	perro.morder('zapato');
	perro.aparecer('https://camo.githubusercontent.com/b77a181ad750ac763cf3effac9857e6373000b41/687474703a2f2f626578746c616e2e636f6d2f696d672f706172612d637572736f732f6b656e61692e6a7067');

	//Prototipo Object()
	var perro2 = new Object();
	perro2.nombre = 'Tobi';
	perro2.edad = 4;
	perro2.raza = 'Pastor Alemán';
	perro2.esterilizado = false;
	perro2.genero = 'Macho';
	perro2.ladrar = function () {
		alert('guau guau');
	};
	perro2.morder = function (cosa) {
		alert('Voy a morder ' + cosa);
	};
	perro2.aparecer = function (imagen) {
		d.write('<img src="' + imagen +'">');
	};

	console.log(
		perro2.nombre,
		perro2.edad,
		perro2.genero,
		perro2.esterilizado,
		perro2.raza
	);

	perro2.ladrar();
	perro2.morder('juguete');
	perro.aparecer('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/German_Shepherd_Dog_head_Lamia_2005.jpg/220px-German_Shepherd_Dog_head_Lamia_2005.jpg');




	

})(document, window, navigator);
		





		//operador ternario
		//variable = (condición) ? true : false;