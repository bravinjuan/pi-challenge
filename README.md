# pi-challenge

Tecnologias utilizadas: NodeJS, Bootstrap y SQLite

## Correr el programa de forma local:
1. Instalar NodeJS.
2. Ejecutar el comando **npm i** desde la consola en la carpeta del proyecto para instalar las dependencias.
3. Ejecutar el comando **npm start** para correr el proyecto. 
4. Acceder al puerto **3000** desde su navegador.

## Correr con docker:
1. Intalar Docker.
2. Ejecutar el comando **docker build -t pi-challenge .** desde la consola en la carpeta del proyecto.
3. Seguido del anterior, ejecutar el comando **docker run --name=pi-challenge -p 3000:3000 -d pi-challenge**.
4. Acceder al puerto **3000** desde su navegador.

## Aclaraciones
El archivo que contiene la estructura de la base de datos es **/database/database.sql**.
No es necesario crear la base de datos o ejecutar este archivo desde la misma, el programa hace esto automaticamente.