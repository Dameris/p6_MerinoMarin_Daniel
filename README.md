# p6_MerinoMarin_Daniel

# Aplicación desplegada: [info-disney](https://infodisney.netlify.app)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
  
  
## Documentación del progreso hasta el 01/03/2024  
`App`  
El componente `App` sirve como el contenedor principal de la aplicación.

  * Estructura:  
    - `Template`: Define la estructura principal de la aplicación, incluyendo la inclusión de los componentes Header, router-view, y Footer.  
    - `Script`: Contiene la configuración del componente, como el nombre del componente y la importación y registro de los componentes hijos Header y Footer.  

  * Funcionalidades implementadas:  
    - Gestión de componentes: El componente sirve como el contenedor principal para otros componentes. Incluye el Header, router-view para la navegación dinámica y Footer, proporcionando una estructura clara y organizada para la aplicación.  
    - Enrutamiento dinámico: El uso de router-view permite que los componentes asociados a las rutas sean renderizados dinámicamente, facilitando la navegación entre diferentes vistas dentro de la aplicación.  

  * Estructuras de datos:  
    No se utilizan estructuras de objetos, métodos o propiedades complejas en este componente. El App principalmente actúa como un contenedor para otros componentes y no requiere una lógica compleja.  

  * Métodos y propiedades:  
    - `name`: Propiedad que define el nombre del componente App. En este caso, se establece como "App".  
    - `components`: Objeto que registra los componentes hijos Header y Footer. Esto permite que estos componentes sean utilizados dentro del componente App.  

<br><br>

`main`  
El archivo `main.js` es el punto de entrada principal de la aplicación.  

  * Estructura del archivo:  
    - Importaciones: Se importan los recursos necesarios para la aplicación, incluyendo archivos `CSS`, la función `createApp` y el componente principal `App.vue`.  
    - Creación de la instancia de la aplicación: Se utiliza la función `createApp` para crear una instancia de la aplicación.  
    - Uso del enrutador: Se utiliza el enrutador definido en `router.js` mediante el método use de la instancia de la aplicación.  
    - Montaje de la aplicación: La aplicación se monta en el elemento con el id "app" en el DOM.  

  * Funcionalidades implementadas:  
    - Importación de estilos globales: Se importa el archivo CSS principal (`main.css`) para aplicar estilos globales a la aplicación.  
    - Creación de la instancia de la aplicación: Se utiliza la función `createApp` para inicializar la aplicación.  
    - Uso del enrutador: Se utiliza el enrutador definido en `router.js` para habilitar la navegación entre las diferentes vistas de la aplicación.  
    - Montaje de la aplicación: La aplicación se monta en el elemento con el id "app" en el DOM, lo que hace que la interfaz de usuario sea visible para los usuarios.  

  * Estructuras de datos:  
    No se utilizan estructuras de datos complejas en este archivo. Principalmente, se importan recursos y se inicializa la aplicación.  

  * Métodos y propiedades:
    - `createApp`: Función proporcionada por Vue para crear una instancia de la aplicación.
    - `use`: Método utilizado para agregar el enrutador a la aplicación.
    - `mount`: Método que monta la aplicación en el DOM, asociándola con un elemento HTML específico.

<br><br>

`LayoutPrivate` y `LayoutPublic`  
Los componentes `LayoutPublic` y `LayoutPrivate` proporcionan estructuras de diseño básicas para las páginas públicas y privadas de la aplicación, respectivamente.  
Ambos componentes incluyen un encabezado (`Header`) y un pie de página (`Footer`), lo que proporciona una navegación coherente y una experiencia de usuario consistente en toda la aplicación.  

  * Estructura:
    - `Template`: Ambos componentes contienen un elemento `<main>` que actúa como contenedor principal para el contenido de las páginas. Utilizan `<router-view>` para renderizar el contenido de las rutas anidadas.
    - `Script`: Los scripts definen los nombres de los componentes (`LayoutPublic` y `LayoutPrivate`) y especifican los componentes hijos que se utilizan en el diseño (`Header` y `Footer`).

  * Funcionalidades implementadas:
    - Encabezado y pie de página: Ambos componentes importan y utilizan los componentes compartidos de encabezado y pie de página (`Header` y `Footer`). Esto asegura una consistencia visual y funcional en toda la aplicación.
    - Contenido dinámico: Utilizan `<router-view>` para permitir que el contenido de las páginas se cambie dinámicamente según la ruta activa. Esto facilita la navegación entre las distintas vistas de la aplicación.

  * Estructuras de datos:
    No se utilizan estructuras de datos complejas en estos componentes. Sin embargo, se importan los componentes compartidos `Header` y `Footer` para su uso dentro de los layouts.

  * Métodos y propiedades:
    - `name`: Propiedad utilizada para definir el nombre del componente.
    - `components`: Objeto que especifica los componentes hijos que se utilizan dentro del diseño.

<br><br>

`ContactPage`  
La página de contacto proporciona a los usuarios un formulario interactivo a través del cual pueden enviar consultas o comentarios a Info Disney.  
Este formulario incluye campos para el correo electrónico, nombre, apellido y mensaje, y realiza validaciones en tiempo real para garantizar que la información proporcionada sea válida antes de enviarla al backend.  

  * Estructura:  
    - `Template`: Contiene el formulario de contacto y muestra el logo de Info Disney y un título informativo.  
    - `Script`: Define la lógica del componente, incluyendo la validación de campos y el envío del formulario.  
    - Estilos: Los estilos se aplican de forma específica para este componente, definiendo la apariencia del formulario y los mensajes de error.  
    
  * Funcionalidades implementadas:  
    - Validación de campos: Se implementa la validación en tiempo real de los campos del formulario para garantizar que los datos proporcionados por el usuario sean válidos antes de enviar el formulario.  
    - Envío de formulario: Cuando el usuario completa y envía el formulario, se verifica que todos los campos estén válidos. Si hay algún campo inválido, se muestra un mensaje de error. En caso contrario, se muestra un mensaje de confirmación.  
    - Limpieza de campos: Después de enviar el formulario con éxito, se limpian automáticamente todos los campos para facilitar la entrada de datos.  
    
  * Estructuras de datos:  
    - `formData`: Un objeto que almacena los datos del formulario, incluyendo el correo electrónico, nombre, apellido y mensaje.  
    - Variables de error (`emailError`, `firstNameError`, `lastNameError`, `messageError`): Variables booleanas que indican si hay errores de validación en los campos correspondientes del formulario.
    
  * Métodos:  
    - `checkForm()`: Método que se ejecuta al enviar el formulario. Verifica si hay errores de validación en los campos del formulario y muestra mensajes de alerta apropiados.  
    - `validateEmail()`, `validateFirstName()`, `validateLastName()`, `validateMessage()`: Métodos para validar la entrada del usuario en los campos de correo electrónico, nombre, apellido y mensaje respectivamente. Actualizan las variables de error correspondientes.

<br><br>

`router`  
El archivo `router.js` es responsable de manejar la navegación entre diferentes vistas y componentes de la aplicación. Utiliza Vue Router, una biblioteca oficial, para la gestión de rutas.  

  * Estructura:  
    - Importaciones: Se importan las funciones createRouter y createWebHashHistory de Vue Router para crear el enrutador y definir el historial de navegación basado en el hash de la URL.  
    - Definición de rutas: Se definen las rutas de la aplicación, especificando las URL y los componentes asociados.  
    - Configuración del enrutador: Se crea el enrutador utilizando la configuración de rutas y el historial de navegación.  
    - Exportación del enrutador: Se exporta el enrutador para que pueda ser utilizado por la aplicación.  

  * Funcionalidades implementadas:  
    - Rutas públicas y privadas: Se definen rutas para las páginas públicas y privadas de la aplicación. Las rutas públicas son accesibles para todos los usuarios, mientras que las rutas privadas requieren autenticación.  
    - Carga dinámica de componentes: Se utiliza la función `import()` para cargar dinámicamente los componentes de las páginas cuando se necesitan. Esto mejora el rendimiento de la aplicación al reducir el tiempo de carga inicial.  
    - Historial de navegación: Se utiliza createWebHashHistory para gestionar el historial de navegación de la aplicación, lo que permite la navegación dentro de una página única web mediante el uso de un hash en la URL.  

  * Estructuras de datos:  
    - `routes`: Un array de objetos que define las rutas de la aplicación. Cada objeto de ruta contiene la URL y el componente asociado.  

  * Métodos y propiedades:  
    - `createRouter()`: Método utilizado para crear una instancia del enrutador de Vue Router.  
    - `createWebHashHistory()`: Método utilizado para crear una instancia del historial de navegación basado en el hash de la URL.  
    - `routes`: Propiedad que almacena la configuración de las rutas de la aplicación.  
    - `router`: Objeto que representa el enrutador de la aplicación, utilizado para la navegación entre las diferentes vistas y componentes.

<br><br>

`Footer`  
El componente `Footer` representa el pie de página de la aplicación.  

  * Estructura del componente:  
    - `Template`: Define la estructura HTML del pie de página, incluyendo secciones para el logo, detalles de contacto, enlaces y títulos de sección.  
    - `Script`: Contiene la configuración del componente, como el nombre del componente y cualquier lógica adicional que pueda ser necesaria en el futuro.  
    - Estilos: Define los estilos CSS específicos para el pie de página, incluyendo la apariencia visual y el diseño.  

  * Funcionalidades implementadas:  
    - Información de contacto: Proporciona la dirección de correo electrónico de contacto y enlaces a las redes sociales (sin implementar).  
    - Enlaces a políticas y términos: Ofrece enlaces a las políticas de privacidad y términos de servicio (sin implementar).  
    - Secciones de información: Presenta secciones que proporcionan detalles sobre el sitio web y soporte.  
    - Enlace a la página de contacto: Utiliza el componente `router-link` de Vue Router para dirigir a los usuarios a la página de contacto de la aplicación.  

  * Estructuras de datos:  
    No se utilizan estructuras de objetos, métodos o propiedades complejas en este componente. El Footer es principalmente una estructura estática que muestra información estática y enlaces.  

  * Métodos y propiedades:  
    - `name`: Propiedad que define el nombre del componente Footer.  
    - `router-link`: Componente de Vue Router que permite la navegación a través de enlaces dentro de la aplicación.

<br><br>

`Header`  
El componente `Header` representa el encabezado de la aplicación.  

  * Estructura del componente:  
    - `Template`: Define la estructura HTML del encabezado, incluyendo la navegación, el logotipo y otros elementos visuales.  
    - `Script`: Contiene la configuración del componente, como el nombre del componente y cualquier lógica adicional que pueda ser necesaria en el futuro.  
    - Estilos: Define los estilos CSS específicos para el encabezado, incluyendo la apariencia visual y el diseño.  

  * Funcionalidades implementadas:  
    - Navegación: Se implementa la navegación mediante el uso de `router-link` para permitir a los usuarios cambiar entre diferentes vistas de la aplicación. Enlaces a las páginas de favoritos, sobre nosotros, inicio de sesión y registro están presentes.  
    - Animación del logo: Se ha aplicado una animación (text-flicker-in-glow) al logotipo del encabezado para proporcionar un efecto visual atractivo.  
    - Interruptor modo oscuro / modo claro: Se ha incluido un interruptor para permitir a los usuarios cambiar entre los modos oscuro y claro. Esto mejora la accesibilidad y la experiencia del usuario al permitirles ajustar la apariencia de la aplicación.  

  * Estructuras de datos:  
    No se utilizan estructuras de objetos, métodos o propiedades complejas en este componente. El Header es principalmente una estructura estática que muestra información estática y enlaces.  

  * Métodos y propiedades:  
    - `name`: Propiedad que define el nombre del componente Header.  
    - `router-link`: Componente de Vue Router que permite la navegación a través de enlaces dentro de la aplicación.

<br><br>

`Login`  
El componente `Login` representa el formulario de Log In de la aplicación.  

  * Estructura del componente:  
    - `Template`: Define un formulario de inicio de sesión que permite a los usuarios ingresar su correo electrónico y contraseña, así como un enlace para dirigirse a la página de registro si aún no son miembros.  
    - `Script`: Se define el componente de Vue.js que maneja la lógica del formulario, incluyendo la validación de datos antes del envío.  
    - Estilos: Define los estilos CSS específicos para el Login, incluyendo la apariencia visual y el diseño.  

  * Funcionalidades implementadas:  
    - Validación de formulario: Se implementa la validación en tiempo real del correo electrónico y la contraseña. Los mensajes de error se muestran si los campos no cumplen con los criterios de validación.  
    - Envío del formulario: El formulario se envía una vez que todos los campos están validados. Si hay algún error, se muestra una alerta indicando que todos los campos deben contener información válida.  
    - Enlace a la página de registro: Se proporciona un enlace para permitir a los usuarios registrarse si aún no tienen una cuenta.  

  * Estructuras de datos:  
    - `pageTitle`: Variable que almacena el título de la página de inicio de sesión.  
    - `formData`: Objeto que almacena los datos del formulario, incluyendo el correo electrónico y la contraseña.  
    - `emailError`, `passwordError`: Variables booleanas que indican si hay errores en los campos de correo electrónico y contraseña, respectivamente.  

  * Métodos y propiedades:  
    - `checkForm`: Método que valida el formulario antes de enviarlo, mostrando una alerta si hay errores.  
    - `validateEmail`, `validatePassword`: Métodos que validan el formato del correo electrónico y contraseña ingresados por el usuario, respectivamente.

<br><br>

`Signup`  
El componente `Signup` representa el formulario de Sign Up de la aplicación.  

  * Estructura del componente:  
    - `Template`: Define un formulario de registro que permite a los usuarios ingresar su correo electrónico, contraseña, nombre, apellido, país, género y aceptar los términos de privacidad y uso.  
    - `Script`: Se define el componente de Vue.js que maneja la lógica del formulario, incluyendo la validación de datos antes del envío y la recuperación de la lista de países.  
    - Estilos: Define los estilos CSS específicos para el Signup, incluyendo la apariencia visual y el diseño.  

  * Funcionalidades implementadas:  
    - Define los estilos CSS específicos para el Signup, incluyendo la apariencia visual y el diseño.  
    - Envío del formulario: El formulario se envía una vez que todos los campos están validados. Si hay algún error, se muestra una alerta indicando que todos los campos deben contener información válida.  
    - Selección de género: Los usuarios pueden seleccionar su género haciendo clic en los botones correspondientes.  
    - Recuperación de países: Se obtiene la lista de países a través de una solicitud HTTP al archivo `countries.json`.  

  * Estructuras de datos:  
    - `pageTitle`: Variable que almacena el título de la página de registro.  
    - `formData`: Objeto que almacena los datos del formulario, incluyendo el correo electrónico, contraseña, nombre, apellido, país y género.  
    - `emailError`, passwordError, firstNameError, lastNameError: Variables booleanas que indican si hay errores en los campos de correo electrónico, contraseña, nombre y apellido, respectivamente.  
    - `countries`: Arreglo que almacena la lista de países recuperados del archivo countries.json.  

  * Métodos y propiedades:  
    - `checkForm`: Método que valida el formulario antes de enviarlo, mostrando una alerta si hay errores.  
    - `validateEmail`, `validatePassword`, `validateFirstName`, `validateLastName`: Métodos que validan el formato de los diferentes campos del formulario.  
    - `fetchCountries`: Método que realiza una solicitud HTTP para obtener la lista de países desde el archivo `countries.json`.  
    - `selectGender(gender)`: Método que permite a los usuarios seleccionar su género haciendo clic en los botones correspondientes.  

<br><br>

`CharactersListPage`  
El componente `CharactersListPage` muestra una lista de personajes de las franquicias en una página específica de la aplicación.  

  * Estructura del componente:  
    - `Template`: Define una estructura HTML que muestra una imagen de fondo, el logotipo de Disney y una lista de personajes con enlaces para ver más detalles.  
    - `Script`: Se encarga de manejar la lógica del componente, incluyendo la recuperación de datos de los personajes y su presentación en la página.
    - `Estilos`: Define estilos CSS específicos para el componente, incluyendo el diseño y la apariencia visual.  

  * Funcionalidades implementadas:  
    - Utiliza una solicitud HTTP para obtener la lista de personajes desde el archivo `xCharacters.json`.  
    - Muestra una lista de personajes de Disney con imágenes y enlaces para ver más detalles.  
    - Aplica estilos visuales específicos, incluyendo el color de fondo del contenedor de la lista de personajes.  

  * Estructuras de datos:  
    - `characters`: Array que almacena la lista de personajes recuperados del archivo `xCharacters.json`.  

  * Métodos y propiedades:  
    - `fetchCharacters`: Método que realiza una solicitud HTTP para obtener la lista de personajes desde el archivo `xCharacters.json`.  
    - `mounted`: Hook de ciclo de vida de Vue.js que se ejecuta después de que el componente se ha montado en el DOM y se encarga de llamar al método fetchCharacters() para cargar los datos de los personajes.  
    - `data`: Función que devuelve un objeto con las propiedades de datos del componente, en este caso, inicializa la propiedad characters como un array vacío para almacenar los personajes.  

<br><br>

`CharactersPage`  
El componente `CharactersPage` muestra información detallada sobre wl peresonaje seleccionado.  

  * Estructura del componente:  
    - `Template`: Define la estructura HTML que muestra el nombre del personaje, una imagen de fondo, la imagen del personaje, su biografía y un botón para cambiar la imagen.  
    - `Script`: Se encarga de manejar la lógica del componente, incluyendo la recuperación de datos del personaje y la lógica para cambiar la imagen.
    - `Estilos`: Define estilos CSS específicos para el componente, incluyendo el diseño y la apariencia visual.  

  * Funcionalidades implementadas:  
    - Utiliza una solicitud HTTP para obtener los datos del personaje desde el archivo `xCharacters.json` según el ID proporcionado en la ruta.  
    - Muestra el nombre del personaje, una imagen de fondo, la imagen del personaje, su biografía y un botón para cambiar la imagen.  
    - Permite al usuario cambiar la imagen del personaje haciendo clic en el botón "NEXT IMAGE".  

  * Estructuras de datos:  
    - `characters`: Objeto que almacena los datos del personaje recuperados del archivo `xCharacters.json`.
    - `imageIndex`: Índice que indica qué imagen del personaje se está mostrando actualmente.  

  * Métodos y propiedades:  
    - `fetchCharacters`: Método que realiza una solicitud HTTP para obtener los datos del personaje desde el archivo `xCharacters.json` según el ID proporcionado en la ruta.  
    - `changeImage`: Método que cambia la imagen del personaje mostrada en la página cuando se hace clic en el botón "NEXT IMAGE".  

<br><br>

`HomePage`  
El componente `HomePage`  muestra una página principal que incluye secciones para diferentes franquicias de Disney, Pixar, Star Wars y Marvel.  

  * Estructura del componente:  
    - `Template`: Define la estructura HTML que muestra imágenes y enlaces a las diferentes secciones de personajes de Disney, Pixar, Star Wars y Marvel.  
    - `Estilos`: Define estilos CSS específicos para el componente, incluyendo el diseño y la apariencia visual de las diferentes secciones.  

  * Funcionalidades implementadas:  
    - Muestra secciones para las franquicias de Disney, Pixar, Star Wars y Marvel.  
    - Proporciona enlaces a las páginas de detalles de los personajes de cada franquicia.  

<br><br>

`TrivaGame`  
El componente `TriviaPage` proporciona una sección de trivial con una variedad de cuestionarios para poner a prueba el conocimiento sobre el mundo de Disney.  

  * Estructura del componente:  
    - `Template`: El componente consta de dos secciones principales:  
                  1. Loader: Muestra un indicador de carga mientras se recuperan los datos de la trivia.  
                  2. Trivia Container: Contiene la explicación de la sección de trivia y los cuestionarios disponibles.  
    - `Script`:  El script maneja la lógica del componente, incluyendo la recuperación de datos de los cuestionarios y la interacción del usuario.  
    - `Estilos`: Define estilos CSS específicos para el componente, asegurando una presentación visual atractiva y coherente.  

  * Funcionalidades implementadas:  
    - Recupera los datos de los cuestionarios desde el archivo `testsTrivia.json`.  
    - Presenta preguntas y opciones de respuesta para cada cuestionario.  
    - Proporciona retroalimentación sobre las respuestas seleccionadas por el usuario.  

  * Estructuras de datos:  
    - `tests`: Array que almacena los datos de los cuestionarios recuperados del archivo testsTrivia.json.   
    - `result`: Mensaje que indica si la respuesta seleccionada por el usuario fue correcta o incorrecta.  
    - `userScore`: Puntuación acumulada por el usuario.  

  * Métodos y propiedades:  
    - `startTest`: Método que inicia un cuestionario seleccionado por el usuario.  
    - `shuffleArray`: Método que mezcla aleatoriamente un array.  
    - `checkAnswer`: Método que verifica la respuesta seleccionada por el usuario y actualiza la puntuación.   
