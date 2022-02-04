<?php

namespace App\Controller\Api;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProjectController extends AbstractController
{
    //? Find all projects
    #[Route('/api/projects', name: 'api_projects_get', methods: 'GET')]
    public function GetCollection(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->findAll();
        return $this->json(
            $projects,
            Response::HTTP_OK,
            [],
            ['groups' => 'projects_get']
        );
    }

    //? Find a project by id
    #[Route('/api/projects/{id<\d+>}', name: 'api_projects_get_item', methods: 'GET')]
    public function getItem(Project $project): Response
    {
        return $this->json($project, Response::HTTP_OK, [], ['groups' => 'projects_get']);
    }
}
