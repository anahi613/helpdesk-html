CREATE DATABASE helpdesk;


CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    prioridad VARCHAR(10) NOT NULL,
    estado VARCHAR(20) NOT NULL
);


INSERT INTO tickets
(titulo, descripcion, categoria, prioridad, estado)
VALUES
(
'Computadora no enciende',
'Equipo no responde al presionar botón de encendido',
'Hardware',
'Alta',
'Abierto'
);