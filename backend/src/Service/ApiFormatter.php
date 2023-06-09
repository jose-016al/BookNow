<?php
namespace App\Service;

class ApiFormatter
{
    public function users($user): array
    {
        $userJSON=[];

        $userJSON = array (
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'last_name' => $user->getLastName(),
            'phone' => $user->getPhone(),
            // 'password' => $user->getPassword(),
            'roles' => $user->getRoles(),
        );
        
        return $userJSON;
    }

    public function bookings($booking): array
    {
        $bookingJSON=[];

        $bookingJSON = array (
            'id' => $booking->getId(),
            'type' => $booking->getType(),
            'date' => $booking->getDate(),
            'time' => $booking->getTime(),
            'duration' => $booking->getDuration(),
            'status' => $booking->getStatus(),
            'name' => $booking->getUser()->getName(),
            'last_name' => $booking->getUser()->getLastName(),
            'userId' => $booking->getUser()->getId(),
        );
        
        return $bookingJSON;
    }

}