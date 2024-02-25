# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# drum-machine-freeCodeCamp

## Crea una bater�a electr�nica

Objective: Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.

Cumplir las siguientes historias de usuario y superar todas las pruebas. Utiliza cualquier librer�a o API que necesites. Dale tu propio estilo.

Puedes utilizar cualquier combinaci�n de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux y jQuery para completar este proyecto. Debes usar un framework frontend (como por ejemplo React), ya que esta secci�n trata sobre el aprendizaje de frameworks frontend. No se recomiendan otras tecnolog�as que no est�n en la lista anterior y su uso queda bajo tu propia responsabilidad. Estamos considerando dar soporte a otros frameworks frontend como Angular y Vue, pero actualmente no est�n soportados. Aceptaremos e intentaremos solucionar todos los informes de problemas que utilicen la stack tecnol�gica sugerida para este proyecto. �Que tengas una feliz programaci�n!

Historia de usuario #1: Debe ser capaz de ver un contenedor externo con un correspondiente id="drum-machine" que contiene todos los dem�s elementos.

Historia de usuario #2: Dentro de #drum-machine puedo ver un elemento con un id="display" correspondiente.

Historia de usuario #3: Dentro de #drum-machine puedo ver 9 elementos de drum pad en los que se puede hacer clic, cada uno con un nombre de clase de drum-pad, un id �nico que describe el clip de audio que el pad de tambor ser� configurado para activar, y un texto interno que corresponde a una de las siguientes teclas del teclado: Q, W, E, A, S, D, Z, X, C. Los pads de la bater�a DEBEN estar en este orden.

Historia de usuario #4: Dentro de cada .drum-pad, debe haber un elemento HTML5 audio que tenga un atributo src apuntando a un clip de audio, un nombre de clase clip, y un id correspondiente al texto interno de su padre .drum-pad (e.g. id="Q", id="W", id="E" etc.).

Historia de usuario #5: Cuando hago clic en .drum-pad elemento, el clip de audio contenido en su elemento hijo audio debe ser activado.

Historia de usuario #6: Cuando presione la tecla de activaci�n asociada con cada .drum-pad, el clip de audio contenido en su elemento hijo audio debe ser activado (p. ej. pulsando la tecla Q deber�a activar el tambor que contiene la cadena Q, pulsando la tecla W deber�a activar la tecla Tambor que contiene la cadena W, etc.).

Historia de usuario #7: Cuando es un .drum-pad es activado, una cadena que describe el clip de audio asociado se muestra como el texto interior del elemento #display (cada cadena debe ser �nica).