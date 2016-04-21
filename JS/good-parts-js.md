# Las Buenas Partes de JavaScript

### Orientado a Objetos
JavaScript tiene un fuerte enfoque de programación orientada a objetos, a pesar de algunos debates que tienen lugar debido a las diferencias de la orientacion a objetos en Javascript comparado con otros lenguajes.

### Programación basada ​​en Prototipos
La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.

### Funciones Anónimas (Anonymous Functions)
Funciones anómimas que son declaradas dinámicamente en tiempo de ejecución. Son llamadas anónimas porque no poseen un nombre de la misma manera que las funciones normales

### Funciones: Objetos de Primera Clase (Functions as First-Class Objects)
Las funciones en JavaScript son objetos de primera clase. Esto significa que las funciones son simplemente un tipo de objeto especial, con las cuales se pueden hacer las mismas cosas que cualquier otro objeto podria hacer.

### Tipado Blando (Loose Typing)
No es necesario especificar el tipo de dato de una variable al ser declarada, cuando se le asigna un valor, JavaScript detecta el tipo de dato automáticamente.

### Alcance y Elevación (Scoping & Hoisting)
**Alcance:** En JavaScript, las funciones son nuestras delimitadoras del alcance de facto al momento de la declaración de variables, lo cual significa que los bloques que son de bucles y condicionales (tales como `if`, `for`, `while`, `switch` y `try`) NO delimitan el alcance, a diferencia de la mayoría de otros lenguajes. Por lo tanto, estos bloques compartirán el mismo alcance que la función que las contiene. De esta forma, podría ser peligroso declarar variables dentro de bloques si se requiere que las variables sólo sean vistas en el bloque que pertenecen.

**Elevación:** En ejecución, todas las declaraciones `var` y `function` son movidas para el comienzo de cada función (su alcance) esto es conocido como Elevación. Por ello, es buena práctica declarar todas las variables juntas en la primera línea, con el fín de evitar falsas expectativas con las variables que han sido declaradas luego de la asignación de su valor.

### Funciones de Clausura (Closures)
Las clausuras o closures son funciones que hacen referencia a variables independientes (libres). En otras palabras, la función definida en el closure 'recuerda' el ambiente en el cual esta fue creado. Esto es un importante concepto para entender, así como útil durante el desarrollo, por ejemplo emular métodos privados. Esto puede también ayuda a aprender como evitar errores, como crear closures en bucles.

### Modo Estrícto (Strict Mode)
El modo estricto de ECMAScript 5 es una manera de optar por una forma restringida de JavaScript. El código en modo estricto y en modo no estrícto pueden coexistir, de esta forma, scripts pueden optar entrar al modo estrícto de forma incremental.

### Funciones Auto Invocadas o Auto Ejecutables (Immediately-Invoked)
Es un patrón el cual produce un scope léxico usando las funciones de scoping de Javascript. La Expresión de función inmediatamente invocada puede ser usada para evitar el hoisting de las variables con los bloques, protege contra la contaminación del ambiente global y simultáneamente permite acceder a los métodos publicos al tiempo que conserva la privacidad en las variables definidas dentro de la función. También se conoce. Este patrón ha sido referido también como una **función anónima autoejecutable**.