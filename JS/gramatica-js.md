# Gramática JavaScript


## Nombrar de Archivos
  Use snake_case when naming files.

    ```
    js_style_guide.js
    ```
  - [0.2](#0.2) <a name='0.2'></a> Use camelCase when naming objects, primitives, functions, and instances.

    ```javascript
    const obj = {};
    const num = 1;
    const map = new Map();
    function fn() {};
    ```

  - [0.3](#0.3) <a name='0.3'></a> Use PascalCase when naming singletones, constructors or classes.

    ```javascript
    function MyClass() {}
    class MyClass {}
    ```

  - [0.4](#0.4) <a name='0.4'></a> Use UPPERCASE when naming constants.

    ```javascript
    const MY_CONSTANT = 1;
    ```

## Types

  - [1.1](#1.1) <a name='1.1'></a> **Primitives**: When you access a primitive type you work directly on its value.

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

  - [1.2](#1.2) <a name='1.2'></a> **Complex**: When you access a complex type you work on a reference to its value.

    + `object`
    + `array`
    + `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#table-of-contents)**





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