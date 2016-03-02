# Administración de Expedientes

### Instalación

Clonar el repositorio

`$ git clone https://github.com/XchelSV/Administracion-de-Expedientes-de-FE-BUAP.git AdminExp`

Instalar los modulos requeridos

`$ cd AdminExp`
`$ npm install`

Iniciar el servidor

`$ PORT=4020 node app.js`

### Directorios/Archivos
 - assets: Archivos css, javascripts e imágenes que se enviarán al cliente, estos archivos son para desarrollo, antes de ser procesados.
 - db: Configuración de conexión a la base de datos.
 - models: esquemas de mongoose para la base de datos.
 - public: Ruta pública para almacenar los css, javascripts, e imágenes ya optimizados, estos archivos son de sólo lectura y no deben ser modificados.
 - routes: Archivos con los endpoints del sistema
 - test: Scripts de pruebas que se ejecutaran al construir la aplicación.
 - views: Vistas realizadas con Jade

### Flujo de trabajo

Se trabajará creando branches distintas para cada tarea o parche, una vez terminada la tarea se eliminará el branch y se hará merge con master.

Los pequeños commits serán cambios *patch*, cada tarea terminada será un *minor* y cada sprint será un *major*.

Una vez creadas las pruebas para cada tarea en un branch específico, se construirá la aplicación de la siguiente manera:

`$npm run build -s`

Este comando verificará que no existan errores sintácticos, realizará las pruebas, minimizará los archivos css y js públicos, y optimizará las imágenes. 

Una vez que este comando se haya ejecutado con éxito, será necesario limpiar el directorio con git y hacer los respectivos commits.

Antes de hacer push al servidor de github, será necesario indicar el tipo de cambio en la versión:

`$npm version <patch|minor|major>`

Por último sólo queda hacer push de los cambios.


