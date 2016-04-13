# Gramática JavaScript

La gramática se define como el estudio de las reglas y principios que estandarizan el uso del lenguaje dentro de la oración

Si llevamos este término a la programación podríamos entender el concepto de la gramática como las reglas y principios que regulan la escritura del código

Por ende entendemos que no es solo es el hecho de escribir código como se nos de la gana, sino que debemos escribir código que sea entendible y ordenado

* Nombramiento de archivos
    * Usa `snake_case`
    * `js_style_guide.js`

* Nombramiento de objetos, primitivos, funciones e instancias
    * Usa `camelCase`
    * `var obj = {};`
    * `var num = 1;`
    * `var map = new Map();`
    * `function fn() {}`

* Nombramiento de clases y constructores
    * Usa `PascalCase`
    * `class MyClass {}`
    * `function MyClass() {}`

* Nombramiento de constantes
    * Usa `UPPER_CASE`
    * `const MY_CONSTANT = 1;`

## Tipos en JavaScript

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

## Ordenamiento de Código

1. Importaciones o requerimientos de otros archivos o librerias
2. Definición de constantes
3. Definición de variables y objetos
4. Definición de funciones
5. Asignación de eventos y estados iniciales

## Más Gramática

* [Comentarios](https://github.com/airbnb/javascript#comments)
* [Espacio en Blanco](https://github.com/airbnb/javascript#whitespace)
* [Punto y coma](https://github.com/airbnb/javascript#semicolons)
* [Guía de Estilo JavaScript de Airbnb](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)

## Objetos principales de JavaScript en el navegador

* `window`
* `document`
* `navigator`