	class PerroClass {
		//El constructor es un método especial que se ejecuta en el momento de instanciar la clase
		constructor(nombre, edad, raza, genero, esterilizado) {
			this.nombre = nombre;
			this.edad = edad;
			this.raza = raza;
			this.genero = (genero) ? 'Hembra' : 'Macho';
			this.esterilizado = esterilizado;
		};

		ladrar() {
			alert('guau guau');
		};

		morder(cosa) {
			alert('Voy a morder ' + cosa);
		};
	
		aparecer(imagen) {
			d.write('<img src="' + imagen +'">');
		};
	};

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