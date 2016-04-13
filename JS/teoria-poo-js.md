# PROGRAMACIÓN

La gente cree que programar es dificil, algunas razones:

* MALOS Profesores
* Programadores que se sienten DIOSES
* PERSONAS que NO les gusta ANALIZAR

La programación es:

* Intuitivo e inherente a los humanos
* Las cosas intuitivas se van a la memoria muscular, donde no se necesita pensar, se ejecuta en automático, como respirar
* Desde que te levantas estás programando
* Debería enseñarse desde la primaria

### PROGRAMAR es el FLUJO de ALGO que se PROCESA, se TRANSFORMA y TERMINA de OTRO MODO

* Debemos PENSAR como HUMANOS y NO como MÁQUINAS
* Debemos entender el FLUJO de lo que se quiere hacer, para EJECUTAR los PROCESOS que controlarán dicho FLUJO
* NUNCA traten de ejecutar PROCESOS, sin antes tener un FLUJO que controlar

### PROGRAMAR ES FLUJO Y NO PROCESOS

# PROGRAMACIÓN ORIENTADA A OBJETOS

La POO es un paradigma de programación que utiliza objetos e interacciones en el diseño de un sistema y está compuesta por varios elementos y características

La POO trata de plasmar o representar la realidad del mundo físico (lo concreto) 
y llevarlo al mundo digital (lo abstracto)

### Platón primer programador POO
![Platón](http://jonmircha.github.io/slides-poo-js/img/platon.jpg)
> Decía que vivimos en el mundo de las ideas, y los objetos son representaciones físicas de esa idea

### 4 CONCEPTOS BÁSICOS DE POO

* Clase
* Objeto
* Métodos
* Atributos

![kEnAi](http://jonmircha.github.io/slides-poo-js/img/kenai.jpg)

	Class Perro() { ... }

	kenai = new Perro();

	kenai.ladrar();
	kenai.comer('croqueta');

	kenai.raza = 'Criollo';
	kenai.edad = 3;
	kenai.esterilizado = true;


#### Clase: 
	
* Es un **Modelo** a seguir
* La idea de Platón
* Sintaxis: `Class Perro(){...}`

#### Objeto:

* Representación o **Instancia** de una clase
* La representación física de la idea de Platón
* Sintaxis: `kenai = new Perro();`

Los objetos tienen 2 facultades:
* Métodos
* Atributos

#### Métodos: 

* Son las cosas o **Acciones** que hacen los objetos
	* Sintaxis: `objeto.metodo();`
   	* correr, caminar, mover la cola, ladrar (verbos/acciones)
	* `kenai.comer('croqueta');`
	* `kenai.ladrar();`
* Los Métodos fuera de los objetos se llaman **Funciones**
	* `function ladrar() { ... }`
* Los **Parámetros** son argumentos (datos) que se pueden pasar (o no) a una función. Pueden ser opcionales, y se separan por comas.
	* `function comer(comida) { ... }`

#### Atributos: 

* Son las características o **Propiedades** que tienen los objetos
	* Sintaxis: `objeto.atributo = valor;`
	* `kenai.raza = 'Criollo';`
	* `kenai.edad = 3;`
	* `kenai.esterilizado = true;`
* Los Atributos fuera de los objetos se llaman **Variables**
	* `var raza = 'Criollo';`








* Tipos de Datos de ARBNB y REDRADIX
* POO en JS
* Servidore WEB y Node









Aquí meter Arbnb

3 TIPOS BÁSICOS DE VARIABLES

EN CUALQUIER LENGUAJE

Strings ("Cadenas")
Numbers (enteros-reales)
Booleans (true-false)


JavaScript trabaja con Camel Case
(Técnica del Camello)

Cuando una instrucción tenga una sola palabra, va en minúsculas p.e. write().


Sólo las clases rompen esta regla, siempre va en mayúscula la letra inicial p.e. Date()


Cuando una instrucción tenga 2 o más palabras, apartir de la segunada la primer letra va en mayúscula p.e. getElementById()


POO EN JAVASCRIPT

LOS 3 OBJETOS PADRES EN JS
Window
Document
Navigator
 

DOCUMENT OBJECT MODEL (DOM)