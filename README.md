# API Node.js y MongoDB para el Bootcamp "Campus"

Este proyecto es una API desarrollada en Node.js y utiliza MongoDB como base de datos para gestionar la información de estudiantes y entrenadores del Bootcamp "Campus".

## Configuración

### Requisitos previos

- Node.js instalado en tu máquina
- Una base de datos MongoDB

### Pasos para configurar el proyecto

1. Clona el repositorio:

****
git clone https://github.com/Johan-web-developer/Api_Node.git

###
2. Instala las dependencias:

cd tu-proyecto
npm install

###
3. Configura la conexión a tu base de datos MongoDB editando el archivo `.env` y reemplazando `MONGODB_URI` con tu URI de conexión.

MONGODB_URI=tu_uri_de_conexion_a_MongoDB
DBBD=nombre_de_tu_base_de_datos

###

4. Inicia el servidor:

npm start


## Uso

La API ofrece las siguientes rutas:

- `GET /campers`: Obtiene todos los estudiantes.
- `GET /campers/:id`: Obtiene un estudiante por su ID.
- `POST /campers`: Añade un nuevo estudiante.
- `PUT /campers/:id`: Actualiza un estudiante por su ID.
- `DELETE /campers/:id`: Elimina un estudiante por su ID.

- `GET /trainers`: Obtiene todos los entrenadores.
- `GET /trainers/:id`: Obtiene un entrenador por su ID.
- `POST /trainers`: Añade un nuevo entrenador.
- `PUT /trainers/:id`: Actualiza un entrenador por su ID.
- `DELETE /trainers/:id`: Elimina un entrenador por su ID.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un pull request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
