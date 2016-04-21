# Good Parts JavaScript

## Orientado a Objetos

JavaScript tiene un fuerte enfoque de programación orientada a objetos, a pesar de algunos debates que tienen lugar debido a las diferencias de la orientacion a objetos en Javascript comparado con otros lenguajes.

### Programación basada ​​en Prototipos

La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.





ANONYMOUS FUNCTIONS (FUNCIONES ANÓNIMAS) Funciones anómimas que son declaradas dinámicamente en tiempo de ejecución. Son llamadas anónimas porque no poseen un nombre de la misma manera que las funciones normales.

FUNCTIONS AS FIRST-CLASS OBJECTS (FUNCIONES DE OBJETOS DE PRIMERA CLASE) Las funciones en JavaScript son objetos de primera clase. Esto significa que las funciones son simplemente un tipo de objeto especial, con las cuales se pueden hacer las mismas cosas que cualquier otro objeto podria hacer.

LOOSE TYPING (TIPADO BLANDO) Para muchos desarrolladores front-end, JavaScript fue su primera experiencia en lenguajes de scripting y/o interpretados. Para estos desarrolladores, el concepto y las implicaciones de las variables de tipado blando quizas son de segunda naturaleza. Como siempre, el crecimiento explosivo en demanda para aplicaciones web modernas, ha resultado en un crecimiento en el número de desarrolladores back-end que han tenido que meter sus manos en tecnologías del lado del cliente. Muchos de estos programadores llegan experiencia en lenguajes de tipado fuerte, tales como C# o Java, y le resultan desconocidas las libertades y las potenciales trampas envueltas en el trabajo con variables de tipado blando.

SCOPING AND HOISTING (ALCANCE Y ELEVACIÓN)Scoping o Alcance: En JavaScript, las funciones son nuestras delimitadoras del alcance de facto al momento de la declaración de variables, lo cual significa que los bloques que son de bucles y condicionales (tales como if, for, while, switch y try) NO delimitan el alcance, a diferencia de la mayoría de otros lenguajes. Por lo tanto, estos bloques compartirán el mismo alcance que la función que las contiene. De esta forma, podría ser peligroso declarar variables dentro de bloques si se requiere que las variables sólo sean vistas en el bloque que pertenecen. Hoisting o Elevación: En ejecución, todas las declaraciones var y function son movidas para el comienzo de cada función (su alcance) - esto es conocido como Elevación. Dicho esto, es buena practica declarar todas las variables juntas en la primera línea, con el fín de evitar falsas expectativas con las variables que han sido declaradas luego de la asignación de su valor - esto es un problema común con programadores que llegan de lenguajes con alcance de bloques.


FUNCTION BINDING (FUNCIÓN DE VINCULACIÓN) La Función de Vinculación es probablemente la última de las preocupaciones de un principiante con JavaScript, pero cuando se entiende que necesita una solución al problema de cómo mantener el contexto de 'this' dentro de otra función, entonces puede darse cuenta que de hecho necesita de la función bind Function.prototype.bind().


CLOSURE FUNCTION (FUNCIÓN DE CLAUSURA) Las Clausuras o closures son funciones que hacen referencia a variables independientes (libres). En otras palabras, la función definida en el closure 'recuerda' el ambiente en el cual esta fue creado. Esto es un importante concepto para entender, así como útil durante el desarrollo, por ejemplo emular métodos privados. Esto puede también ayuda a aprender como evitar errores, como crear closures en bucles.

STRICT MODE (MODO ESTRICTO) El modo estricto de ECMAScript 5 es una manera de optar por una forma restringida de JavaScript. El modo estricto no es solo un subconjunto: este tiene intencionalmente una semántica diferente del código normal. Los navegadores que no soportan el modo estricto correran el código de forma distinta con aquellos navegadores que lo soportan, entonces no confie en el modo estricto sin realizar una prueba de características, asegurando el soporte de los aspectos relevantes del modo estricto. El código en modo estricto y en modo no estrícto pueden coexistir, de esta forma, scripts pueden optar entrar al modo estrícto de forma incremental.


IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE) (EXPRESIÓN DE FUNCIÓN INMEDIATAMENTE INVOCADA) Una expresión de función inmediatamente invocada es un patrón el cual produce un scope lexico usando las funciones de scoping de Javascript. La Expresión de función imadiatamente invocada puede ser usada para evitar el hoisting de las variables con los bloques, protege contra la contaminación del ambiente global y simultáneamente permite acceder a los métodos publicos al tiempo que conserva la privacidad en las variables definidas dentro de la función.

Este patrón ha sido referido como una función anónima autoejecutable, pero @cowboy (Ben Alman) introduce el termino IIFE como un término semántico más exacto para el patrón.