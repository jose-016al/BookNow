<?php

namespace App\Controller;

use App\Service\ApiFormatter;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\Persistence\ManagerRegistry;

#[Route('/api')]
class ApiController extends AbstractController
{
    // Devuelve los usuarios
    #[Route('/users', name: 'app_api_users', methods: ["GET"])]
    public function usersIndex(Request $request, UserRepository $userRepository, Apiformatter $apiFormatter): JsonResponse
    {
        $users = $userRepository->findAll();
        $usersJSON = [];

        foreach ($users as $user) {
            $usersJSON[] = $apiFormatter->userToArray($user);
        }
        return new JsonResponse($usersJSON);
    }

    // Crea un nuevo usuario
    // #[Route('/register', name: 'app_api_create_user', methods: ["POST"])]
    #[Route('/register', name: 'app_api_create_user', methods: ["POST"])]
    public function createUser(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserRepository $userRepository, Apiformatter $apiFormatter, ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        var_dump($data);
        if ($userRepository->emailExists($data['email'])) {
            var_dump("No se ha metido");
            return new JsonResponse(false, 403);
        }
        var_dump("POR FIN");
        //Crear un nuevo usuario con los datos recibidos
        $user = new User();
        $user->setEmail($data['email']);
        // $user->setName($data['name']);
        $user->setRoles(['ROLE_USER']);
        $user->setPassword(
            $userPasswordHasher->hashPassword(
                $user,
                $data['password']
                )
            );
            // Guardar el nuevo usuario en la base de datos
        $entityManager->persist($user);
        $entityManager->flush();

        // Devolver una respuesta al cliente React
        $userJSON = $apiFormatter->userToArray($user);
        return new JsonResponse($userJSON, 201);
    }
}
