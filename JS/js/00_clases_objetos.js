//comentario de una linea
/*
comentarios
multilinea
*/
//función anónima autoejecutable
(function (d, w, n) {
	'use strict';
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

	//Función Constructora
	function Perro (nombre, edad, raza, genero, esterilizado) {
		this.nombre = nombre;
		this.edad = edad;
		this.raza = raza;
		//operador ternario
		//variable = (condición) ? verdadero : falso;
		// = Asignación
		// == Comparo valores
		//this.genero = (genero == true) ? 'Hembra' : 'Macho';
		// === Comparo valor y tipo
		//this.genero = (genero === true) ? 'Hembra' : 'Macho';
		this.genero = (genero) ? 'Hembra' : 'Macho';
		this.esterilizado = esterilizado;

		this.ladrar = function () {
			alert('guau guau');
		};

		this.morder = function (cosa) {
			alert('Voy a morder ' + cosa);
		};
	
		this.aparecer = function (imagen) {
			d.write('<img src="' + imagen +'">');
		};
	}

	var perro3 = new Perro('Toti', 15, 'French', 0, false);
	var perro3_2 = new Perro('Hérculisa', 4, 'Chihuahua', 1, true);
	console.log(
		perro3.nombre,
		perro3.edad,
		perro3.genero,
		perro3.esterilizado,
		perro3.raza,
		perro3_2.nombre,
		perro3_2.edad,
		perro3_2.genero,
		perro3_2.esterilizado,
		perro3_2.raza
	);

	perro3.ladrar();
	perro3.morder('cartero');
	perro3.aparecer('http://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/caniche-2.jpg');

	perro3_2.ladrar();
	perro3_2.morder('piedra');
	perro3_2.aparecer('http://previews.123rf.com/images/isselee/isselee1205/isselee120500551/13589411-Cachorro-de-Chihuahua-11-semanas-de-edad-sentado-delante-de-fondo-blanco-Foto-de-archivo.jpg');

	//Clases (apartir de ES6 o ES2015)
	class PerroClass {
		//El constructor es un método especial que se ejecuta en el momento de instanciar la clase
		constructor(nombre, edad, raza, genero, esterilizado) {
			this.nombre = nombre;
			this.edad = edad;
			this.raza = raza;
			this.genero = (genero) ? 'Hembra' : 'Macho';
			this.esterilizado = esterilizado;
		}

		ladrar() {
			alert('guau guau');
		};

		morder(cosa) {
			alert('Voy a morder ' + cosa);
		};
	
		aparecer(imagen) {
			d.write('<img src="' + imagen +'">');
		};
	}

	var perro4 = new PerroClass('Firulais', 6, 'Border Collie', false, true);

	console.log(
		perro4.nombre,
		perro4.edad,
		perro4.genero,
		perro4.esterilizado,
		perro4.raza
	);

	perro4.ladrar();
	perro4.morder('cartero');
	perro4.aparecer('http://1.bp.blogspot.com/-ac2NHP5U5i0/T10WkHQcsSI/AAAAAAAAA4k/5MnFLni7Y0s/s1600/border+collie+cachorro.jpg');

})(document, window, navigator);