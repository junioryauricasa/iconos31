# JavaScript
## "Es el único lenguaje en el que me doy cuenta que las personas sienten que no necesitan aprenderlo antes de empezar a utilizarlo." ([Douglas Crockford](http://www.crockford.com/))

![JavaScript](http://bextlan.com/v4/themes/v4/img/tutoriales/javascript.jpg)







JavaScript es el lenguaje de programación frontend de la web.

Es el más popular en Internet, y trabaja en todos los principales navegadores, como Internet Explorer, Firefox, Chrome, Opera, Safari y móviles.

Se utiliza en miles de millones de sitios web para agregar funcionalidad, validar formularios, comunicarse con el servidor, entre otras cosas.

Y algo más...

HTML5 APESTA A JAVASCRIPT

Es un lenguaje interpretado, es decir, no necesita compilar para ejecutarse.

Se define como orientado a objetos, basado en prototipos, no tipado y dinámico.

Todo el mundo puede usarlo sin necesidad de adquirir una licencia

JAVA Y JAVASCRIPT NO SON LO MISMO

ACTIONSCRIPT Y JAVASCRIPT SON PRIMOS

JAVASCRIPT ES UNA IMPLEMENTACIÓN DEL LENGUAJE ESTÁNDAR ECMASCRIPT


ECMA-262 ES EL ESTÁNDAR OFICIAL DE JAVASCRIPT.

JavaScript fue inventado por Brendan Eich de Netscape en 13 DÍAS

Apareció con Navigator 2.0, y desde entonces (1996) en todos los navegadores.


AHORA UN POCO DE...
PROGRAMACIÓN
ORIENTADA A OBJETOS
La POO trata de plasmar o representar

la realidad del mundo físico (lo concreto)

y llevarlo al mundo digital (lo abstracto)


Platón primer programador POO

Decía que vivimos en el mundo de las ideas, y los objetos son representaciones físicas de esa idea.

4 CONCEPTOS BÁSICOS DE POO
Clase
Objeto
Métodos
Atributos


Class Perro(){ ... }
kEnAi = new Perro();
kEnAi.ladrar(); kEnAi.comer("croqueta");
kEnAi.raza = "zorrito firefox"; kEnAi.edad=2; kEnAi.entrenado=true;


Clase: Módelo a seguir
La idea
Class Perro(){...}

Objeto: Representación del módelo
La representación física de la idea
kenai = new Perro();


Los objetos tienen 2 facultades


Métodos: Hacen cosas, Realiazan acciones
objeto.metodo()
correr, caminar, mover la cola, ladrar (verbos/acciones)

kenai.comer("croqueta"); kenai.ladrar();


Los Métodos fuera de los objetos se llaman funciones, los parámetros son opcionales puede llevar o no, y se separan por comas. ej: 

function ladrar(){...} 
function comer(comida){...}

Atributos: Tiene características o propiedades
objeto.atributo=valor

kenai.raza="Criollo"; kenai.sexo = "Macho"; kenai.edad=2; kenai.tamanio = "Mediana"; kenai.adiestrado=true; kenai.esterilizado = true;


Los Atributos fuera de los objetos se llaman variables. ej:

var raza = "Firefox";



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






Lenguaje de Programaciónesentación basado en reglas con una sintaxis de atributo valor

Provee presentación (diseño) al contenido HTML

Su principal objetivo es separar el contenido (HTML) de su presentación (CSS)

## Sintaxis
~~~~~~~~~~~~~~
selector {
    atributo-1: valor-1;
    atributo-2: valor-2;
    ...
    atributo-n: valor-n;
}
~~~~~~~~~~~~~~

## Selectores
Elemento(s) al que se le aplican reglas CSS

### Selectores Básicos:
* **de Etiquetas** `p { ... }`
* **Identificadores** `#menu { ... }`
* **Clases** `.item { ... }`
* [Más info](http://librosweb.es/libro/css/capitulo_2.html)

### Selectores Avanzados
* **Universal** `* { ... }`
* **Descendiente (espacio en blanco)** `.menu a { ... }`
* **de Hijos** `.menu > li { ... }`
* **de Hermanos** `section ~ article { ... }`
* **Adyacentes** `h1 + h2 { ... }`
* **de Atributos** `input[type="text"] { ... }`
* [Más Info](http://librosweb.es/libro/css_avanzado/capitulo_3.html)
    
### Pseudo-selectores
Nos ayudan a aplicar estilos especiales a nuestros elementos HTML, dependiendo de su contexto, posición o estado

Existen 2 tipos:
* Pseudo-clases
* Pseudo-elementos

#### Pseudo-clases
* **Estatus de Enlaces** `:link :visited`
* **Interacciones del Usuario** `:active :hover :focus`    
* **Elementos de Formularios** `:checked :disabled :in-range :invalid :out-of-range :required :target :valid`
* **Posición del Elemento** `:first-child :first-of-type :last-child :last-of-type :nth-child() :nth-last-child() :nth-of-type() :only-child :only-of-type :default`
* **CSS3** `:dir() :empty :first :fullscreen :indeterminate :lang() :left :not() :optional :read-only :read-write :right :root :scope`
* [Más info](https://css-tricks.com/examples/nth-child-tester/)

#### Pseudo-elementos
* **`::after { content:" " }`**
* **`::before { content:" " }`**
* **`::first-letter`**
* **`::first-line`**
* **`::selection`**

## Unidades de MEDIDA
* **Absolutas** `px, pt, pc, cm, mm, in`
* **Relativas**
    * **al Contenedor** 
        * `% (Porcentajes)`
    * **a la Tipografía**
        * `em` basada en la anchura de la letra M del contenedor
        * `ex` basada en la altura de la letra X del contenedor
        * `rem` es el em del elemento raiz (html)
    * **al Viewport**
        * `vw` anchura del viewport
        * `vh` altura del viewport
        * `vmax` entre vw y vh toma el que tenga mayor valor
        * `vmin` entre vw y vh toma el que tenga menor valor

### Equivalencias entre unidades
* **`100% = 1em = 16px = 12pt`**
* [pxtoem](http://pxtoem.com/)

## Colores en CSS
* [Explicación](http://jonmircha.github.io/slides-css/#/1/10)
* [HTML Color Codes](http://html-color-codes.info/)

## Tipografías en CSS
* Locales:
    * Con [@font-face](http://caniuse.com/#search=font-face) y [.woff](http://caniuse.com/#search=woff)
    * [Convertidor de Fuentes](http://www.fontsquirrel.com/tools/webfont-generator)

* Externas:
    * [Google Fonts](https://www.google.com/fonts)
    
* Icónicas
    * [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
    * [IcoMoon](https://icomoon.io/)
    * [FlatIcon - Buscador de Íconos](http://flaticon.com/)
    * [Fontello - Generador de Fuentes Icónicas](http://fontello.com/)

## Características CSS3
* [Bordes, colores RGBA, fuentes tipográficas, unidades relativas, sombras y gradientes](http://www.youtube.com/watch?v=p-ZjVEhMt2U)
* [Ajuste de texto, texto en columnas, tamaño de caja, fondos múltiples, área, origen y tamaño de fondo](http://www.youtube.com/watch?v=QYOujpsVvXE)
* [Transformaciones 2D y 3D, transiciones y animaciones](http://www.youtube.com/watch?v=yj93AWX0P_k)

## Prefijos para los Navegadores
Cuando los navegadores soportan parcialmente un atributo CSS en ocasiones es necesario aplicar los prefijos:

* **`-ms-`** para Internet Explorer y Edge
* **`-moz-`** para Firefox
* **`-webkit-`** para Chrome, Safari, Opera, iOS y Android Browsers

#### Ejemplo
    -ms-border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;

## Modelo de Caja en CSS
* [Explicación](http://jonmircha.github.io/slides-css/#/3)

## Posicionamiento en CSS
* **Estático**: Es el que viene por defecto, un elemento detrás del otro
* **Relativo**: Se desplaza respecto de su posición original
* **Absoluto**: Se desplaza respecto de:
    * la posición del body del documento o 
    * del primer elemento padre relativo que tenga
* **Fijo**: Permite mantener fijo un elemento
* **Pegajoso**: Posicionamiento experimental, permite que el elemento sea relativo o fijo dependiendo del area donde se visualiza
* **Flotante**: Convierte un elemento en flotante desplazándolo hasta la zona más a la izquierda o más a la derecha de la posición en la que originalmente se encontraba
* [Más info](http://librosweb.es/libro/css/capitulo_5.html)

## Visualización en CSS
* **Visibility:** Afecta la visualización del contenido de una caja
* **Display:** Afecta la visualización de la caja
    * **Tipos de Display Básicos**
        * **`block`:** Ocupa todo el ancho disponible
        * **`inline`:** Ocupa sólo el ancho requerido
        * **`none`:** Quita la caja de la visualización del documento

## Técnicas de Maquetación
* **`float: left | right;`**
    * [Más Info](http://librosweb.es/libro/css/capitulo_5/posicionamiento_flotante.html)
* **`display: inline-block;`**
    * [Puedo usarlo](http://caniuse.com/#search=inline-block)
    * [Más Info](https://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html)
* **`display: table;`**
    * [Puedo usarlo](http://caniuse.com/#search=table)
    * [Más Info](https://www.w3.org/TR/CSS21/tables.html)
* **`display: flex;`**
    * [Puedo usarlo](http://caniuse.com/#search=flex)
    * [Guía Completa de CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    * [Más Info Propiedad Flex en CSS-Tricks](https://css-tricks.com/almanac/properties/f/flex/)
    * [Más Info W3C](https://www.w3.org/TR/css-flexbox/)
    * [Más Info MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
* **`display: grid;`**
    * [Puedo usarlo](http://caniuse.com/#search=grid)
    * [Guía Completa de CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
    * [Grid by Example](http://gridbyexample.com/presentations/)
    * [Más Info W3C](https://www.w3.org/TR/css-grid-1/)

## Patrones CSS
Los patrones de diseño son la base para la búsqueda de soluciones a problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces.

Un patrón resulta ser una solución a un problema. Para que una solución sea considerada patrón debe:
* Comprobar su efectividad resolviendo problemas similares
* Ser reutilizable, lo que significa que es aplicable a diferentes problemas en distintas circunstancias

**¿Por qué usar Patrones en CSS?**
* Construimos sistemas, no páginas
* Necesidad de modularidad
* Mejora flujo de trabajo
* Ya han sido probados y validados
* Si trabajamos en equípo mantiene el órden
* Promueven la filosofía DRY **(Don't Repeat Yourself)**

### Frameworks CSS
* [960 Grid System](http://960.gs/)
* [Bootstrap](http://getbootstrap.com/)
* [Foundation](http://foundation.zurb.com/)
* [Pure CSS](http://purecss.io/)
* [jQueryMobile](https://jquerymobile.com/)
* [Materialize](http://materializecss.com/)
* [Skeleton](http://getskeleton.com/)
* [Flexbox Grid](http://flexboxgrid.com/)
* [Responsimple](http://jonmircha.github.io/responsimple/) :heart_eyes:
* [Comparativas entre Frameworks](http://responsive.vermilion.com/compare.php)

### Metodologías CSS

#### OOCSS - [CSS Orientado a Objetos](http://oocss.org/)

#### BEM - [Bloque Elemento Modificador](https://en.bem.info/)

##### Estructura
    .bloque { ... }
    .bloque__elemento { ... }
    .bloque--modificador { ... }

##### Ejemplo
    .menu { ... }
    .menu__item { ... }
    .menu__item--hover{ ... }

#### CCSS - [Componentes CSS](http://sathify.github.io/CCSS/)

##### Estructura
    ComponentName Standard Components (B)
    ComponentName-elementName Component's Element (E)
    ComponentName--modifierName Component's Modifier (M)

##### Ejemplo
    u-className Global base/utility classes
    img-className Global image classes
    animate-className Global animation classes

#### ATOMIC DESIGN
* Metodología basada en: Átomos, Moléculas, Organismos, Plantillas y Páginas
* [Tabla periódica de las etiquetas HTML](http://zqsmm.qiniucdn.com/data/20110511083224/index.html)
* [Artículo](http://bradfrost.com/blog/post/atomic-web-design/)
* [Slides](http://es.slideshare.net/bradfrostweb/atomic-design)
* [Laboratorio de Patrónes](http://patternlab.io/)
* [Ejemplos](http://demo.patternlab.io/)
![Atomic Design](http://bextlan.com/img/para-cursos/atomic-design.png)

## Buenas Prácticas de Código CSS
* Separar nombre de selectores con el guión medio (-) y escribir en minúsculas
* Preferir links sobre @import para llamar las hojas de estilo
* Definir siempre un font-size al elemento root (**`html`**) y hacerlo en **`px`**
* Ser cuidadoso con la definición de reglas a selectores de etiquetas
* Evitar definición de selectores de Identificadores
* Usar en su mayoria selectores de clases
* Aprovechar los pseudo-selectores y unidades de medida disponibles
* Tener precaución con los shorthand de CSS
    * `padding, margin, font, background, border, border-radius`
    * preferible `background-color: #FFF` que `background: #FFF`
* Normalizar los estilos iniciales de nuestras etiquetas HTML
    * [Reset.css](http://meyerweb.com/eric/tools/css/reset/)
    * [Normalize.css](https://necolas.github.io/normalize.css/)
    * Definir uno propio que se adapte a nuestra técnica de maquetación y no te olvides del [box-sizing](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* Maquetar bajo un enfoque **Mobile First**

## Ordenamiento de Código CSS
### Selectores
* Ir de lo General a lo Particular (Aprovechar la Cascada CSS)
* Estilos Generales
    * Código para resetear
    * Selectores de Etiqueta
    * Selectores de ID (si hubiera)
    * Selectores de Clases
* Mediaqueries
    * Preferir Mobile First a Desktop First

### Atributos
Utilizar la fórmula de la **PC-TV**:
* Posicionamiento `position, top, left, right, bottom, clear, z-index`
* Modelo de Caja `display, float, margin, padding, width, height`
* Tipografía `font-family, font-size, line-height, color, text-align`
* Visual `background-color, border, border-radius, outline, opacity`