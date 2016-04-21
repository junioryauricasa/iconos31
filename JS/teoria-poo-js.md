# Fundamentos de Programación JavaScript

![JavaScript](http://bextlan.com/v4/themes/v4/img/tutoriales/javascript.jpg)

### Nota: JavaScript hoy esta en todos lados (Front end, Back end, Bases de Datos, Servidores, Terminal, Hardware, Software, etc). El enfoque de este documento es introductorio a los Fundamentos de Programación Web del lado Front end con JavaScript: conceptos básicos de programación, programación orientada a objetos, gramática y sintaxis de JS, interacción con HTML y CSS, eventos, JSON y AJAX.

## Índice
1. [JavaScript: BEGINS (1995)](#javascript-begins-1995)
1. [JavaScript: AGE OF FLASH (2000)](#javascript-age-of-flash-2000)
1. [JavaScript: AGE OF HTML5 (2008)](#javascript-age-of-html5-2008)
1. [JavaScript: AGE OF WEB COMPONENTS & REAL TIME (2014)](#javascript-age-of-web-components--real-time-2014)
1. [LIBRERIAS y FRAMEWORKS](#librerias-y-frameworks)
1. [JavaScript NO es JAVA](#javascript-no-es-java)
1. [EcmaScript](#ecmascript)
1. [Buenas Prácticas](#buenas-prácticas)
1. [Libros](#libros)

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

### PROGRAMAR ES COMO COCINAR... UNA RECETA

* **Algoritmo**: Serie de pasos ordenados y finitos para realizar o resolver una tarea o problema
* **Diagrama de Flujo**: Es es la representación gráfica de un algoritmo
![Símbolos de los Diagramas de Flujo](http://bextlan.com/img/para-cursos/simbolos-diagramas-flujo.png)
![Ejemplo Diagrama de Flujo](http://bextlan.com/img/para-cursos/diagrama-par-impar.jpg)

# PROGRAMACIÓN ORIENTADA A OBJETOS

La POO es un paradigma de programación que utiliza objetos e interacciones en el diseño de un sistema y está compuesta por varios elementos y características

La POO trata de plasmar o representar la realidad del mundo físico (lo concreto) 
y llevarlo al mundo digital (lo abstracto)

### Platón primer programador POO
![Platón](http://bextlan.com/img/para-cursos/platon.jpg)
> Decía que vivimos en el mundo de las ideas, y los objetos son representaciones físicas de esa idea
> > [Teoría de las Ideas](https://es.wikipedia.org/wiki/Teor%C3%ADa_de_las_formas)

### 4 CONCEPTOS BÁSICOS DE POO

* Clase
* Objeto
* Métodos
* Atributos

![kEnAi](http://bextlan.com/img/para-cursos/kenai.jpg)

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