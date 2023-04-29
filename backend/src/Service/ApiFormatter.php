<?php
namespace App\Service;

class ApiFormatter
{
    public function userToArray($user): array
    {
        $userJSON=[];

        $userJSON = array (
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'last_name' => $user->getLastName(),
            'phone' => $user->getPhone(),
            'password' => $user->getPassword(),
        );
        
        return $userJSON;
    }
    


    public function CompletUserToArray($user): array
    {
        $userJSON=[];
        $orders = [];
        $orders_product=[];
    //     $user_products = [];

        foreach ($user->getOrders() as $order) {
            $obj = new \stdClass();
            $obj -> id = $order->getId();
            $obj -> total_price = $order->getTotalPrice();
            $obj -> date = $order->getDate();
            foreach ($order->getOrdersProducts() as $orderproduct) {
                $obj2 = new \stdClass();
                $obj2 -> id = $orderproduct->getId();
                $obj2 -> product = "http://localhost:8000/api/restaurant/".$orderproduct->getIdProduct()->getId()."";
                $obj2 -> amount = $orderproduct->getAmount();
                $orders_product[]=($obj2);
            }
            $obj -> order_products = $orders_product;
            $orders[]=($obj);
        }

    //     foreach ($user->getUserProducts() as $userProducts) {

    //         $obj = new \stdClass();
    //         $obj -> id = $userProducts->getId();
    //         $user_products[]=($obj);
    //     }

        $userJSON = array(
        'id' => $user->getId(),
        'email' => $user->getEmail(),
        'name' => $user->getName(),
        'last_name' => $user->getLastName(),
        'valoration' => $user->getValoration(),
        'show_valoration' => $user->isShowValoration(),
        'orders' => $orders,
        // 'user_products' => $user_products,
    );
    return $userJSON;
    }
}