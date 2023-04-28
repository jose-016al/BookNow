# Backend docs

# Tabla de contenidos
- [Creacion del proyecto](#creacion-del-proyecto)
- [Creacion de la API y configuracion](#creamos-el-controlador-de-la-api)
  - [Creacion de un servicio para gestionar la informacion de la API](#creacion-de-un-servicio-para-gestionar-la-informacion-de-la-api)
  - [Configuracion de las CORS](#configuracion-de-las-cors)


# Creacion del proyecto
Creamos un nuevo proyecto que sera el encargado de gestionar el backend
```php
symfony new backend --webapp
```

# Creacion de la API y configuracion
Empezaremos por crear un nuevo controlador que sera el encargado de la API
```powershell
php bin/console make:controller
```
Tendremos que gestionar las rutas de la API asi que el controlador quedara algo asi
```php
#[Route('/api')] // gestionaremos el trafico a esta ruta
class ApiController extends AbstractController
{
    // Cada metodo tendra una ruta, por ejemplo para el registro /api/register
    // Es importante tener en cuenta los methos en caso de que queramos usar GET o POST
    #[Route('/users', name: 'app_api_users', methods:["GET"])]
    public function users(): JsonResponse
    {
        // Logica de la funcion
    }
}
```

## Creacion de un servicio para gestionar la informacion de la API
Tednremos que crear un directorio llamado "Service" en el directorio src y dentro de el, crear un nuevo servicio que llamaremos "ApiFormatter.php". Sera donde gestionaremos el formato de los datos de la API
```php 
<?php
namespace App\Service;

class ApiFormatter
{
    public function userToArray($user): array
    {
        $userJSON=[];

        $userJSON = array(
        'id' => $user->getId(),
        'name' => $user->getUsername(),
        'password' => $user->getPassword(),
    );
    return $userJSON;
    }
}
```
Una vez tengamos el servicio configurado, lo usaremos en el ApiController
```php
use App\Service\ApiFormatter;

#[Route('/api')]
class ApiController extends AbstractController
{
    // Devuelve los usuarios
    #[Route('/users', name: 'app_api_users', methods:["GET"])]
    public function users(Request $request,UserRepository $userRepository, Apiformatter $apiFormatter): JsonResponse
    {
        $users = $userRepository->findAll();
        $usersJSON = [];

        foreach($users as $user) {
            $usersJSON[] = $apiFormatter->userToArray($user);
        }
        return new JsonResponse($usersJSON);
    }
}
```

## Configuracion de las CORS
Para ello Instalar el paquete "nelmio/cors-bundle" mediante Composer
```powershell
composer require nelmio/cors-bundle
```
Nos asgeguramos de que se haya añadido al bundle en el archivo "config/bundles.php"
```php
return [
    // ...
    Nelmio\CorsBundle\NelmioCorsBundle::class => ['all' => true],
];
```
Configuramos los CORS en el archivo "config/packages/nelmio_cors.yaml", la configuracion puede ser algo como lo sigueinte
```yaml
nelmio_cors:
    defaults:
        allow_credentials: false
        allow_origin: ['*']
        allow_headers: ['*']
        allow_methods: ['GET', 'POST', 'PUT', 'DELETE']
        expose_headers: []
        max_age: 0
    paths:
        '^/api/':
            allow_origin: ['*']
            allow_headers: ['*']
            allow_methods: ['GET', 'POST', 'PUT', 'DELETE']
            max_age: 3600
```