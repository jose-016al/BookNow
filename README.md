# BookNow
Este proyecto consiste en el desarrollo de una plataforma de reservas para pequeñas empresas, con el objetivo de ofrecer una solución útil y fácil de usar para la gestión de citas. La plataforma permitirá a los usuarios solicitar citas a través de un calendario, y los administradores podrán gestionar las citas, añadir, editar y cancelar citas. Los usuarios serán notificados por correo electrónico o mensaje de texto cuando se confirme o cancele una cita.

## Instalacion y uso
Para ejecutar BookNow en tu máquina local, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local utilizando Git.
```bash
git clone https://github.com/jose-016al/BookNow.git
```

2. Abre una terminal en el directorio raíz del proyecto e instala las dependencias de PHP y Javascript utilizando Composer y NPM.
## Backend
1. Instalar las dependencias de Symfony
```bash
cd backend
```
```bash
composer install
```
2. Crea una base de datos en MySQL y configura las credenciales de conexión en el archivo .env.
```bash
php bin/console doctrine:database:create
```
3. Genera la estructura de la base de datos y carga los datos de prueba utilizando las migraciones de Doctrine.
```bash
php bin/console doctrine:schema:create
```
4. Inicia el servidor local utilizando el siguiente comando.
```bash
symfony server:start
```

## Frontend
1. Instalar las dependencias de React
```bash
cd frontend
```
```bash
npm install react-scripts
```
2. Inicia el servidor local utilizando el siguiente comando.
```bash
npm start
```
  

 ### Abre tu navegador web y accede a la URL http://localhost:3000 para visualizar el blog de BookNow.