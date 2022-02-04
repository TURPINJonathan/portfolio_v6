<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    //? Find all users
    #[Route('/api/users', name: 'api_users_get', methods: 'GET')]
    public function GetCollection(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();
        return $this->json(
            $users,
            Response::HTTP_OK,
            [],
            ['groups' => 'users_get']
        );
    }

    //? Find a user by id
    #[Route('/api/users/{id<\d+>}', name: 'api_users_get_item', methods: 'GET')]
    public function getItem(User $user): Response
    {
        return $this->json($user, Response::HTTP_OK, [], ['groups' => 'users_get']);
    }
}
