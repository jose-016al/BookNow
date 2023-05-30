<?php

namespace App\Controller;

use App\Service\ApiFormatter;
use App\Entity\User;
use App\Repository\BookingRepository;
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
        // Obtiene los datos del front y realiza el registro
    #[Route('/register', name: 'app_api_register', methods: ["POST"])]
    public function createUser(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserRepository $userRepository, Apiformatter $apiFormatter, ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);

        if ($userRepository->emailExists($data['email'])) {
            return new JsonResponse(false, 403);
        }
        //Crear un nuevo usuario con los datos recibidos
        $user = new User();
        $user->setEmail($data['email']);
        $user->setName($data['name']);
        $user->setLastName($data['last_name']);
        $user->setPhone($data['phone']);
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
        $userJSON = $apiFormatter->users($user);
        return new JsonResponse($userJSON, 201);
    }

    #[Route('/login', name: 'app_api_login', methods: ['POST'])]
    public function login(Request $request, UserRepository $userRepository, UserPasswordHasherInterface $passwordEncoder, Apiformatter $apiFormatter): JsonResponse
    {
        // Obtener los datos de la petición POST
        $data = json_decode($request->getContent(), true);

        // Buscar al usuario en la base de datos por su email
        $user = $userRepository->findOneBy(['email' => $data['email']]);

        // Si el usuario no existe, devolver un error de autenticación
        if (!$user) {
            return new JsonResponse(false, 402);
        }

        // Verificar que la contraseña es correcta
        $isPasswordValid = $passwordEncoder->isPasswordValid($user, $data['password']);
        if (!$isPasswordValid) {
            return new JsonResponse(false, 401);
        }

        // Devolver los datos del usuario en formato JSON
        $userJSON = $apiFormatter->users($user);
        return new JsonResponse($userJSON, 201);
    }

    #[Route('/bookings', name: 'app_api_booking', methods:["GET"])]
    public function usersIndex(BookingRepository $bookingRepository, Apiformatter $apiFormatter): JsonResponse
    {
        $booking = $bookingRepository->findAll();
        $bookingJSON = [];

        foreach($booking as $book) {
            $bookingJSON[] = $apiFormatter->bookings($book);
        }
        
        return new JsonResponse($bookingJSON);
    }

    #[Route('/bookingsTypes', name: 'app_api_bookingTypes', methods:["GET"])]
    public function getBookingTypes()
    {
        $tiposCitas = [
            ['type' => 'Lavado', 'duration' => 15],
            ['type' => 'Corte', 'duration' => 30],
            ['type' => 'Peinado', 'duration' => 30],
            ['type' => 'Tinte', 'duration' => 60],
            ['type' => 'Alisado', 'duration' => 90],
            ['type' => 'Moldeador', 'duration' => 90],
            ['type' => 'Mechas', 'duration' => 300],
        ];

        return new JsonResponse($tiposCitas);
    }

}
