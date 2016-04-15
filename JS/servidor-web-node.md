# Servidor web

Muchas de las funciones que se realizan en un sitio o aplicación web requieren el acceso a los recursos mediante el protocolo [HTTP](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol) y para ello necesitamos acceder desde nuestro navegador web a un [Servidor Web](https://es.wikipedia.org/wiki/Servidor_web)

Si miramos la barra de direcciónes de nuestro navegador veremos que la ruta de la url empieza con `http://`

Cuando abrimos localmente un archivo con extensión ´.html´ nuestro equipo lo abre con el navegador web que tengamos predeterminado, y lo hace localmente desde la ruta local del disco duro o dispositivo desde donde lo abramos

Si miramos la barra de direcciones de nuestro navegador veremos que la ruta de la url empieza con `file://`

Cuando trabajes en el desarrollo de un sitio o aplicación localmente, siempre debes de hacerlo desde un entorno de servidor

### Di NO  a `file://` usa `http://`

## Instalando un servidor web en mi equipo con Node.js:

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
	* Si tu ruta tiene espacios en blanco deberás ponerla entre comillas:
	* `cd '/la ruta\de mi/carpeta con espacios'`
7. Estando en la carpeta desde la terminal ,ejecuta el comando:
	* `http-server`
	* Si quieres ver todas las opciones que http-server te ofrece lee su [documentación](https://www.npmjs.com/package/http-server)
8. Ir al navegador y acceder a la url:
	* `http://localhost:8080`
9. Para detener el servidor web en la terminal, presiona:
	* `Ctrl + C`