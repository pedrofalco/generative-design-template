## Generative Design Template ✍️

`ES`

Template para crear proyectos de diseño y arte generativo.

Características:
- Live reload en cambios de codigo.
- Creación de bundle y manejo de funciones.
- Minificación de código.
- Funciones adicionales de hashing (`tokenData`), color, random y manejo de archivos.
- Render de imágenes en Headless usando `puppeteer`.
- Descarga en lotes de imágenes en Headless usando Puppeteer.
- Soporte para p5.js y shaders.
- Descarga (`'s'`) y Reload (`'r'`) con teclado.

### Rápida instalación con Node.js y npm 🚩

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i`.

3. `npm start` para inicilizar el entorno de trabajo.

### Comentarios y comandos 🚏 

`npm run render`: Renderizar imágen usando `puppeteer`. Se guarda un screenshot en `outputs`.
> 💡 Tip: usar `npm run render false` para ver el la pestaña.

`npm run export`: Renderizar y exportar imágenes usando `puppeteer`. Por default la cantidad es `5`. Utilizar el cuarto parametro para pasarle la cantidad. Ej.: `npm run export 20`. Se guarda un screenshot en `outputs`.

`npm run min`: Minificar el archivo `sketch.js` con salida en `build/sketch.min.js`.

`npm run bundle`: Crear un bundle de `sketch.js`.
> ❗ Nota: esta funcion todavía esta en fase experimental.

El espacio de trabajo es dentro de la carpeta `public`. Ahi se encuentran los archivos `sketch.js` y `sketch-shader.js`. En caso de elegir usar shaders, utilizar el template `sketch-shader.js` y los archivos dentro de la carpeta `glsl`.

En la carpeta `build` funciona el sistema de export y renderizado de imágenes en modo "headless" (como funciona el engine de artblocks, por ejemplo). Usar el archivo `build.js` para pegar el sketch ahi. 
La variable `tokenData` ya está declarada y asignada. Esta contiene el numero de `ID` y `hash` que se necesita para hacer deterministico el output. La función de random que utilizen debería escuchar una variable que tenga `tokenData.hash`.

👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*


---


`EN`

Boilerplate for creating generative art and design projects.

Features:
- Live reload on code changes.
- Bundle creation and function management.
- Code minification.
- Additional hashing functions (`tokenData`), color, random and file management.
- Rendering images in Headless using `puppeteer`.
- Batch download of images in Headless using Puppeteer.
- Support for p5.js and shaders.
- Download (`'s'`) and Reload (`'r'`) with keyboard.

### Quick Start with Node.js & npm 🚩

To use this repository you need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` in the console.

3. `npm start` to start the working environment.

### Comments & commands 🚏 

`npm run render`: Render image using `puppeteer`. A screenshot is saved in `outputs`.
> 💡 Tip: `npm run render false` to see the page. 

`npm run export`: Render and export images using `puppeteer`. By default the amount is `5`. Use the fourth parameter to pass the quantity. E.g.: `npm run export 20`. A screenshot is saved in `outputs`.

`npm run min`: Minify the `sketch.js` file with output in `build/sketch.min.js`.

`npm run bundle`: Create a `sketch.js` bundle.
> ❗ Note: this function is still in experimental phase.

The workspace is inside the `public` folder. There you will find the `sketch.js` and `sketch-shader.js` files. In case you choose to use shaders, use the `sketch-shader.js` template and the files inside the `glsl` folder.

Inside the `build` folder works the export and rendering system in "headless" mode (as the artblocks engine works, for example). Use the `build.js` file to paste the sketch there. 
The `tokenData` variable is already declared and assigned. It contains the `ID` and `hash` number needed to make the output deterministic. The random function you use should listen for a variable that has `tokenData.hash`.

👋 *If you use it or if you have any feedback or problem, please let me know :)*

🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️🖌️