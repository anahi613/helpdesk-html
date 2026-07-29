# Sistema Help Desk - API REST para Gestión de Incidentes

## Descripción del proyecto

El presente proyecto consiste en el desarrollo de un Sistema de Gestión de Incidentes (Help Desk), cuyo objetivo es permitir la administración de tickets de soporte técnico mediante una API REST.

El sistema permite registrar, consultar, actualizar y eliminar incidentes reportados por los usuarios, almacenando la información en una base de datos PostgreSQL.

El backend fue desarrollado utilizando Node.js y Express.js, aplicando una arquitectura organizada por capas mediante modelos, controladores y rutas, permitiendo una estructura escalable y fácil de mantener.

---

# Tecnologías utilizadas

## Backend

- Node.js
- Express.js
- JavaScript
- API REST
- npm (Node Package Manager)

## Base de datos

- PostgreSQL
- SQL

## Herramientas de desarrollo

- Visual Studio Code
- Postman
- Git
- GitHub

---

# Estructura del proyecto

```
helpdesk-html

 frontend
    index.html
    reportar.html
    tickets.html
    style.css

 backend
   
    config
       db.js
   
    controllers
       ticketController.js
   
    models
       ticketModel.js
   
    routes
       ticketRoutes.js
   
    server.js
    package.json
    package-lock.json
    .env

 db
    tickets.sql

 README.md
```

---

# Requisitos del sistema

Para ejecutar correctamente el proyecto se requiere:

- Node.js instalado.
- PostgreSQL instalado.
- Git instalado.
- Postman para realizar pruebas de la API.

---

# Instalación del proyecto

## 1. Clonar el repositorio

Ejecutar:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta del proyecto:

```bash
cd helpdesk-html
```

---

# Configuración de la base de datos

La aplicación utiliza PostgreSQL como sistema gestor de base de datos.

El script de creación se encuentra ubicado en:

```
db/tickets.sql
```

Este archivo contiene la creación de la base de datos y la tabla principal utilizada por el sistema.

---

# Estructura de la tabla Tickets

La tabla `tickets` contiene los siguientes atributos:

| Campo | Tipo | Descripción |
|---|---|---|
| id | SERIAL | Identificador único del ticket |
| titulo | VARCHAR | Nombre del incidente |
| descripcion | TEXT | Detalle del problema reportado |
| categoria | VARCHAR | Categoría del incidente (Red, Hardware, Software) |
| prioridad | VARCHAR | Nivel de importancia (Alta, Media, Baja) |
| estado | VARCHAR | Estado actual del ticket (Abierto, En Progreso, Cerrado) |

---

# Configuración del Backend

Ingresar a la carpeta backend:

```bash
cd backend
```

Instalar las dependencias necesarias:

```bash
npm install
```

---

# Variables de entorno

Crear un archivo llamado:

```
.env
```

Dentro del archivo configurar los datos de conexión:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=contraseña_postgres
DB_NAME=helpdesk
PORT=3000
```

---

# Ejecución del servidor

Para iniciar la API REST ejecutar:

```bash
node server.js
```

Si la ejecución es correcta se mostrará:

```
Servidor ejecutándose en http://localhost:3000
```

---

# Prueba de conexión con PostgreSQL

Endpoint:

```
GET http://localhost:3000/conexion
```

Respuesta esperada:

```json
{
    "mensaje": "Conexión exitosa"
}
```

---

# Documentación de la API REST

## Obtener todos los tickets

Método:

```
GET
```

Endpoint:

```
http://localhost:3000/tickets
```

Descripción:

Permite consultar todos los incidentes registrados en la base de datos.

---

## Obtener ticket por ID

Método:

```
GET
```

Endpoint:

```
http://localhost:3000/tickets/:id
```

Ejemplo:

```
http://localhost:3000/tickets/1
```

Descripción:

Permite consultar un ticket específico mediante su identificador.

---

## Crear un nuevo ticket

Método:

```
POST
```

Endpoint:

```
http://localhost:3000/tickets
```

Body JSON:

```json
{
    "titulo": "Computadora no enciende",
    "descripcion": "El equipo no inicia correctamente",
    "categoria": "Hardware",
    "prioridad": "Alta",
    "estado": "Abierto"
}
```

Descripción:

Permite registrar un nuevo incidente en el sistema.

---

## Actualizar un ticket

Método:

```
PUT
```

Endpoint:

```
http://localhost:3000/tickets/:id
```

Ejemplo:

```
http://localhost:3000/tickets/1
```

Body JSON:

```json
{
    "titulo": "Computadora no enciende",
    "descripcion": "Equipo enviado al área técnica",
    "categoria": "Hardware",
    "prioridad": "Media",
    "estado": "En Progreso"
}
```

Descripción:

Permite modificar la información de un ticket existente.

---

## Eliminar un ticket

Método:

```
DELETE
```

Endpoint:

```
http://localhost:3000/tickets/:id
```

Ejemplo:

```
http://localhost:3000/tickets/1
```

Descripción:

Permite eliminar un ticket registrado.

---

# Pruebas realizadas

Las pruebas de funcionamiento fueron realizadas utilizando Postman.

Se verificó:

- Conexión correcta entre el backend y PostgreSQL.
- Registro de nuevos tickets.
- Consulta de todos los tickets.
- Consulta de tickets mediante ID.
- Actualización de información.
- Eliminación de registros.

Todas las operaciones CRUD fueron comprobadas mediante respuestas JSON y códigos HTTP exitosos.

---

# Control de versiones

El proyecto fue gestionado utilizando Git y GitHub.

La rama utilizada para el desarrollo del backend fue:

```
feature/backend-api
```

Comandos utilizados:

```bash
git checkout -b feature/backend-api

git add .

git commit -m "Implementacion API REST Help Desk"

git push origin feature/backend-api
```

Posteriormente la rama será fusionada con la rama principal de desarrollo:

```
develop
```

---

# Autor

*Anahí Carolina Chang Loor*
