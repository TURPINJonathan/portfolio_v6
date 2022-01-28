<?php

namespace App\Controller\Api;

use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectController extends AbstractController
{
    #[Route('/api/projects', name: 'api_projects_get', methods: 'GET')]
    public function GetCollection(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->findAll();
        return $this->json(
            [$projects],
            Response::HTTP_OK,
            [],
            ['groups' => 'projects_get']
        );
    }
}
