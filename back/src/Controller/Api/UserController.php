<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'api_user_get', methods: 'GET')]
    public function GetCollection(UserRepository $userRepository): Response
    {
        $user = $userRepository->findAll();
        return $this->json(
            [$user],
            Response::HTTP_OK,
            [],
            ['groups' => 'users_get']
        );
    }
}
