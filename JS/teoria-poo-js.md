# Fundamentos de Programación JavaScript
![JavaScript](http://bextlan.com/v4/themes/v4/img/tutoriales/javascript.jpg)

**Nota: JavaScript hoy esta en todos lados (Front end, Back end, Bases de Datos, Servidores, Terminal, Hardware, Software, etc). El enfoque de este documento es introductorio a los Fundamentos de Programación Web del lado Front end con JavaScript: conceptos básicos de programación, programación orientada a objetos, gramática y sintaxis de JS, interacción con HTML y CSS, eventos, JSON y AJAX.**


## Índice
1. [Programación](#programaciÓn)
1. [Programación Orientada a Objetos](#programaciÓn-orientada-a-objetos)
1. [Gramática JS](#gramática-javascript)
0. [Sintaxis JS](#sintaxis-javascript)
1. [Servidor Web](#servidor-web)
1. [Las buenas partes de JS](#las-buenas-partes-de-javascript)
1. [DOM](#dom)
1. [Eventos en JS](#eventos-en-javascript)
1. [Agente de Usuario](#agente-de-usuario)

## PROGRAMACIÓN
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

**[⬆ regresar al índice](#Índice)**


## PROGRAMACIÓN ORIENTADA A OBJETOS
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

**[⬆ regresar al índice](#Índice)**


## Gramática JavaScript
La gramática se define como el estudio de las reglas y principios que estandarizan el uso del lenguaje dentro de la oración

Si llevamos este término a la programación podríamos entender el concepto de la gramática como las reglas y principios que regulan la escritura del código

Por ende entendemos que no es solo es el hecho de escribir código como se nos de la gana, sino que debemos escribir código que sea entendible y ordenado

### Nomenclatura
* De archivos
    * Usa `snake_case`
    * `js_style_guide.js`

* De objetos, primitivos, funciones e instancias
    * Usa `camelCase`
    * `var myObj = {};`
    * `var myNum = 1;`
    * `var myMap = new Map();`
    * `function myFn() {}`

* De clases y constructores
    * Usa `PascalCase`
    * `class MyClass {}`
    * `function MyClass() {}`

* De constantes
    * Usa `UPPER_CASE`
    * `const MY_CONSTANT = 1;`

### Palabras Reservadas
    A: abstract
    B: boolean, break, byte
    C: case, catch, char, class, const, continue
    D: debugger, default, delete, do, double
    E: else, enum, export, extends
    F: false, final, finally, float, for, function
    G: goto
    I: if, implements, import, in, instanceof, int, interface
    L: long
    N: native, new, null
    P: package, private, protected, public
    R: return
    S: short, static, super, switch, synchronized
    T: this, throw, throws, transient, true, try, typeof
    V: var, volatile, void
    W: while, with

### Tipos de Datos
* **Primitivos**: Cuando se accede a un tipo primitivo se trabaja directamente sobre su valor
    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

* **Complejo**: Cuando se accede a un tipo complejo se trabaja en una referencia a su valor
    + `object = {}`
    + `array = []`
    + `function`

### Ordenamiento de Código
1. Importaciones o requerimientos de otros archivos o librerias
2. Definición de constantes
3. Definición de variables y objetos
4. Definición de funciones
5. Asignación de eventos y estados iniciales

### Más Gramática
* [Comentarios](https://github.com/airbnb/javascript#comments)
* [Espacio en Blanco](https://github.com/airbnb/javascript#whitespace)
* [Punto y coma](https://github.com/airbnb/javascript#semicolons)
* [Guía de Estilo JavaScript de Airbnb](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)

### Objetos principales de JavaScript en el Front end
* **`window`**
* **`document`**
* **`navigator`**

**[⬆ regresar al índice](#Índice)**


## Sintaxis JavaScript
* [Programación Básica](http://librosweb.es/libro/javascript/capitulo_3.html)
	* Variables
	* Tipos de variables
		* Numéricas
		* Cadenas de texto
		* Arrays
		* Booleanos
	* Operadores
		* Asignación
		* Incremento y decremento
		* Lógicos
			* `Not`
			* `And`
			* `Or`
		* Matemáticos
		* Relacionales
	* Estructuras de control de flujo
		* `if`
		* `if`...`else`
		* `if`...`else if`...`else`
		* `for`
		* `for`...`in`
	* Funciones y propiedades básicas de JavaScript
		* Funciones útiles para cadenas de texto
		* Funciones útiles para arrays
		* Funciones útiles para números

* [Programación Avanzada](http://librosweb.es/libro/javascript/capitulo_4.html)
	* Funciones
		* Argumentos y valores de retorno
	* Ámbito de las variables
	* Sentencias break y continue
	* Otras estructuras de control
		* `while`
		* `do`...`while`
		* `switch`...`case`

**[⬆ regresar al índice](#Índice)**


## Servidor Web
Muchas de las funciones que se realizan en un sitio o aplicación web requieren el acceso a los recursos mediante el protocolo [HTTP](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol) y para ello necesitamos acceder desde nuestro navegador web a un [Servidor Web](https://es.wikipedia.org/wiki/Servidor_web)

Si miramos la barra de direcciónes de nuestro navegador veremos que la ruta de la url empieza con `http://`

Cuando abrimos localmente un archivo con extensión ´.html´ nuestro equipo lo abre con el navegador web que tengamos predeterminado, y lo hace localmente desde la ruta local del disco duro o dispositivo desde donde lo abramos

Si miramos la barra de direcciones de nuestro navegador veremos que la ruta de la url empieza con `file://`

Cuando trabajes en el desarrollo de un sitio o aplicación localmente, siempre debes de hacerlo desde un entorno de servidor

#### Di NO  a `file://` usa `http://`

### Instalando un servidor web con Node.js:

![Node.js](http://bextlan.com/img/para-cursos/nodejs-new-pantone-black.png)

1. Ir a [nodejs.org](https://nodejs.org)
2. Descargar e Instalar Node.js
	* Puedes instalar la versión **LTS (Long Term Support)**, la cuál tendrá soporte a largo plazo, generalmente se usa en ambientes de producción.
	* Puedes instalar la versión **Stable**, la cuál es la última versión estable de Node, semanalmente sale una versión con carácterísticas nuevas y correcciones de bugs, generalmente se usa en ambientes de desarrollo.
3. Abrir una terminal de comandos,
	* Si estás en Linux o Mac puede ser que debas anteponer a todos los comandos que ejecutes, la palabra `sudo`
	* Si estás en Windows con el programa de ejecutar escribe `cmd` da `enter` y en la terminal de comandos escribe `powershell`, con ello accederás a una terminal más poderosa de Windows que acepta comandos de Linux
	* Si no sabes usar comandos en la terminal, aquí te dejo una referencia para:
		* [Windows](http://ss64.com/nt/index.html)
		* [Linux y Mac](https://fosswire.com/post/2007/08/unixlinux-command-cheat-sheet/)
4. Comprobar que tenemos instalado Node y NPM, escribe en tu terminal los comandos:
	* `node -v` me da la versión de Node instalada
	* `npm -v` me da la versión de NPM instalada
5. Instalar el paquete [http-server](https://www.npmjs.com/package/http-server) de manera global con el comando:
	* `npm install http-server -g`
6. Ir desde la terminal de comandos a la carpeta donde quiero ejecutar un servidor web local
	* `cd C:\la-ruta\de-mi\carpeta`
	* Si la ruta tiene espacios en blanco deberás ponerla entre comillas:
	* `cd '/la ruta\de mi/carpeta con espacios'`
7. Estando en la carpeta desde la terminal ,ejecuta el comando:
	* `http-server`
	* Si quieres ver todas las opciones que http-server ofrece lee su [documentación](https://www.npmjs.com/package/http-server)
8. Ir al navegador y acceder a la url:
	* `http://localhost:8080`
9. Para detener el servidor web en la terminal, presiona:
	* `Ctrl + C`

**[⬆ regresar al índice](#Índice)**


## Las Buenas Partes de JavaScript

### Orientado a Objetos
Los objetos son una colección de propiedades.

JavaScript tiene un fuerte enfoque de programación orientada a objetos, a pesar de algunos debates que tienen lugar debido a las diferencias de la orientacion a objetos en Javascript comparado con otros lenguajes.

#### Programación basada ​​en Prototipos
La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.

#### 4 Formas de crear objetos en JS:
1. Objetos literales
2. Prototipo Object()
3. Función Constructora
4. Clases (apartir de ES6 o ES2015)

### Funciones como Objetos de Primera Clase (Functions as First-Class Objects)
Las funciones en JavaScript son objetos de primera clase. Esto significa que las funciones son simplemente un tipo de objeto especial, con las cuales se pueden hacer las mismas cosas que cualquier otro objeto podria hacer.

### Tipado Blando (Loose Typing)
No es necesario especificar el tipo de dato de una variable al ser declarada, cuando se le asigna un valor, JavaScript detecta el tipo de dato automáticamente.

### Alcance y Elevación (Scoping & Hoisting)
**Alcance:** En JavaScript, las funciones son nuestras delimitadoras del alcance de facto al momento de la declaración de variables, lo cual significa que los bloques que son de bucles y condicionales (tales como `if`, `for`, `while`, `switch` y `try`) NO delimitan el alcance, a diferencia de la mayoría de otros lenguajes. Por lo tanto, estos bloques compartirán el mismo alcance que la función que las contiene. De esta forma, podría ser peligroso declarar variables dentro de bloques si se requiere que las variables sólo sean vistas en el bloque que pertenecen.

**Elevación:** En ejecución, todas las declaraciones `var` y `function` son movidas para el comienzo de cada función (su alcance) esto es conocido como Elevación. Por ello, es buena práctica declarar todas las variables juntas en la primera línea, con el fín de evitar falsas expectativas con las variables que han sido declaradas luego de la asignación de su valor.

### Modo Estrícto (Strict Mode)
El modo estricto de ECMAScript 5 es una manera de optar por una forma restringida de JavaScript. El código en modo estricto y en modo no estrícto pueden coexistir, de esta forma, scripts pueden optar entrar al modo estrícto de forma incremental.

### Funciones Anónimas (Anonymous Functions)
Funciones anómimas que son declaradas dinámicamente en tiempo de ejecución. Son llamadas anónimas porque no poseen un nombre de la misma manera que las funciones normales

### Funciones de Clausura (Closure Functions)
Las clausuras o closures son funciones que hacen referencia a variables independientes (libres). En otras palabras, la función definida en el closure 'recuerda' el ambiente en el cual esta fue creado. Esto es un importante concepto para entender, así como útil durante el desarrollo, por ejemplo emular métodos privados. Esto puede también ayuda a aprender como evitar errores, como crear closures en bucles.

### Funciones Auto Invocadas o Auto Ejecutables (Immediately-Invoked Functions)
Es un patrón el cual produce un scope léxico usando las funciones de scoping de Javascript. La Expresión de función inmediatamente invocada puede ser usada para evitar el hoisting de las variables con los bloques, protege contra la contaminación del ambiente global y simultáneamente permite acceder a los métodos publicos al tiempo que conserva la privacidad en las variables definidas dentro de la función. También se conoce. Este patrón ha sido referido también como una **función anónima autoejecutable**.

**[⬆ regresar al índice](#Índice)**


## DOM
El **Modelo de Objetos del Documento** (DOM - Document Object Model) es un API para documentos HTML y XML. Este prevee una representación estructural del documento, permitiéndole modificar su contenido y presentación visual mediante el uso de un lenguaje de scripting tal como JavaScript.
![DOM](http://bextlan.com/img/para-cursos/dom.png)

### Métodos para acceder a los elementos del DOM (Selectores)
* **`document.getElementsByTagName('tag-name')`** devuleve un arreglo con todos los elementos de una etiqueta HTML
* **`document.getElementsByClassName('class-name')`** devuleve un arreglo con todos los elementos de una clase CSS
* **`document.getElementsByName('name-attribute-value')`** devuleve el elemento que tenga el valor del atributo name buscado
* **`document.getElementsById('id-name')`** devuleve el elemento que tenga el valor del atributo id buscado
* **`document.querySelectorAll('a-selector')`** devuleve un arreglo con todos los elementos de un selector
* **`document.querySelector('a-selector')`** devuleve el elemento que tenga el valor del selector buscado

### Atributos para acceder a los nodos y elementos del DOM por su posición jerárquica:
* Nodos (Elementos y Textos):
	* **`.parentNode`**: Nodo padre
	* **`.childNodes`**: Nodos hijos
	* **`.firstChild`**: Primer nodo hijo
	* **`.lastChild`**: Último nodo hijo
	* **`.nextSibling`**: Siguiente nodo hermano 
	* **`.previousSibling`**: Anterior nodo hermano
	
* Elementos (Etiquetas HTML):
	* **`.parentElement`**: Elemento padre
	* **`.children`**: Elementos hijos
	* **`.firstElementChild`**: Primer elemento hijo
	* **`.lastElementChild`**: Último elemento hijo
	* **`.nextElementSibling`**: Siguiente elemento hermano 
	* **`.previousElementSibling`**: Anterior elemento hermano

### Métodos para crear elementos en el DOM
* **`.createElement('HTMLElement')`**: Crea un nuevo elemento HTML del tipo especificado y devuelve un referencia a dicho elemento
* **`.createTextNode('string')`**: Crea un nuevo nodo de texto con el contenido especificado en la cadena de texto

### Atributos para crear o modificar nodos y elementos en el DOM
* **`.nodeValue = 'string'`**: Crea o modifica el texto de un nodo especificado
* **`.innerText = 'string'`**: Crea o modifica el contenido de texto del elemento especificado
* **`.innerHTML = 'HTML Content'`**: Crea o modifica el contenido HTML del elemento especificado

### Métodos para agregar, reemplazar y eliminar nodos en el DOM
* **`.appendChild(child-node)`**: Agrega un nodo hijo al elemento especificado
* **`.removeChild(child-node)`**: Elimina un nodo hijo al elemento especificado
* **`.replaceChild(new-node, replaced-node)`**: Reemplaza un nodo hijo al elemento especificado
* **`.insertBefore(new-node, reference-node)`**: Inserta un nodo antes del que elegimos como referencia dentro del elemento especificado
* **`.cloneNode(boolean)`**: Clona el nodo especificado. `true` con contenido, `false` vacío

### Accediendo a Atributos HTML en el DOM
* **`.getAttribute('name-attribute')`**: Obteniendo el valor de un atributo HTML del elemento especificado
* **`.setAttribute('name-attribute', 'new-value')`**: Estableciendo el valor de un atributo HTML del elemento especificado
* **`elemento.nombreAtributo`**: Obteniendo el valor de un atributo HTML del elemento especificado
* **`elemento.nombreAtributo = 'nuevo valor'`**: Estableciendo el valor de un atributo HTML del elemento especificado

### Accediendo a Estilos CSS en el DOM
* **`.style`**: Objeto que contiene todos los atributos CSS del elemento especificado
* **`elemento.style.nombreAtributo`**: Obteniendo el valor de un atributo CSS del elemento especificado
* **`elemento.style.nombreAtributo = 'nuevo valor'`**: Estableciendo el valor de un atributo CSS del elemento especificado

### Accediendo a las clases CSS en el DOM
* **`.className`**: Devuelve una cadena de texto con los nombres de las clases del elemento especificado
* **`.classList`**: Devuelve un arreglo con los nombres de las clases del elemento especificado
* **`.classList[n]`**: Devuelve la clase que se encuentre en la posición `n` del arreglo `classList` del elemento especificado
* **`.classList.contain('class-name')`**: Devuelve `true` si el elemento especificado contiene la clase CSS mencionada, sino devuelve `false`
* **`.classList.add('class-name')`**: Agrega la clase CSS mencionada al elemento especificado
* **`.classList.remove('class-name')`**: Elimina la clase CSS mencionada al elemento especificado
* **`.classList.toggle('class-name')`**: Intercambia (agrega o elimina) la clase CSS mencionada al elemento especificado

### Insertando texto o contenido HTML dinámico al DOM:
* [**`.insertAdjacentHTML(position, content);`**](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML)

**[⬆ regresar al índice](#Índice)**

## Eventos en JavaScript
JavaScript pueden utilizar el modelo de programación basada en eventos. En este tipo de programación, los scripts se dedican a esperar a que el usuario **haga algo** (que pulse una tecla, que mueva el ratón, que cierre la ventana del navegador), el script responde a la acción del usuario normalmente procesando esa interacción y generando un resultado.

Los eventos hacen posible que los usuarios transmitan información al sitio o aplicación. JavaScript define numerosos eventos que permiten una interacción completa entre el usuario y la web. La pulsación de una tecla, pinchar o mover el ratón, seleccionar un elemento de formulario, redimensionar la ventana del navegador; son algunos ejemplos de la [lista de eventos](http://librosweb.es/libro/javascript/capitulo_6/modelo_basico_de_eventos_2.html) disponible en JS.

JavaScript permite asignar una función a cada uno de los eventos. De esta forma, cuando se produce cualquier evento, JS ejecuta la función asociada. Este tipo de funciones se denominan **event handlers** (manejadores de eventos).

Existen 3 formas de generar manejadores de eventos en JS:

1. Como atributo de elementos HTML
1. Como manejador semántico
1. Como manejador múltiple

### Evento como atributo de elemento HTML
	<button id="hola" onclick="saludar()">Hola</button>

	<script>
		function saludar(evento) {
			console.log(
				'Hola',
				evento
			);
		}
	</script>

### Manejador de eventos semántico
#### Con función definida
	var btnHola = document.querySelector('#hola');

	function saludar(evento) {
		console.log(
			'Hola',
			evento
		);
	}

	btnHola.onclick = saludar;
#### Con función anónima
	var btnHola = document.querySelector('#hola');

	btnHola.onclick = function (evento) {
		console.log(
			'Hola',
			evento
		);
	};

### Manejador de eventos múltiple
#### Con función definida
	var btnHola = document.querySelector('#hola');

	function saludar(evento) {
		console.log(
			'Hola',
			evento
		);
	}

	btnHola.addEventListener('click', saludar);
	btnHola.removeEventListener('click', saludar);
#### Con función anónima
	var btnHola = document.querySelector('#hola');

	btnHola.addEventListener('click', function (evento) {
		console.log(
			'Hola',
			evento
		);
	});

	btnHola.removeEventListener('click', function (evento) {
		console.log(
			'Hola',
			evento
		);
	});

**[⬆ regresar al índice](#Índice)**

## Agente de Usuario

Un agente de usuario es una aplicación informática que funciona como cliente en un protocolo de red; el nombre se aplica generalmente para referirse a aquellas aplicaciones que acceden a Internet.

Los agentes de usuario que se conectan a la web pueden ser desde navegadores web hasta los web crawler de los buscadores, pasando por teléfonos móviles, lectores de pantalla y navegadores en braille usados por personas con discapacidades.

Cuando un usuario accede a un sitio o aplicación web generalmente envía una cadena de texto que identifica al agente de usuario ante el servidor. Este texto forma parte del pedido a través de HTTP, llevando como prefijo **User-agent:** que incluye información como el nombre de la aplicación, la versión, el sistema operativo, y el idioma. Los bots, como los web crawlers, a veces incluyen también una URL o una dirección de correo electrónico para que el administrador del sitio web pueda contactarse con el operador del mismo.

La identificación de agente de usuario es uno de los criterios de exclusión utilizado por el estándar de exclusión de robots para impedir el acceso a ciertas secciones de un sitio web.

* [Entendiendo el User Agent](http://www.useragentstring.com/)
* [Lista de User Agents](http://www.useragentstring.com/pages/useragentstring.php)

**[⬆ regresar al índice](#Índice)**


##Formularios