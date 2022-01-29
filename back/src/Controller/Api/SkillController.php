<?php

namespace App\Controller\Api;

use App\Entity\Skill;
use App\Repository\SkillRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class SkillController extends AbstractController
{
    //? Find all skills
    #[Route('/api/skills', name: 'api_skills_get', methods: 'GET')]
    public function GetCollection(SkillRepository $skillRepository): Response
    {
        $skills = $skillRepository->findAll();
        return $this->json(
            [$skills],
            Response::HTTP_OK,
            [],
            ['groups' => 'skills_get']
        );
    }

    //? Find a skill by knowledge
    #[Route('/api/skills/knowledge/{knowledge}', name: 'api_skills_get_knowledge', methods: 'GET')]
    public function getItem(SkillRepository $skillRepository, Request $request): Response
    {
        $knowledge = $request->get('knowledge');
        $skills = $skillRepository->findBy(['knowledge' => $knowledge]);
        return $this->json($skills, Response::HTTP_OK, [], ['groups' => 'skills_get']);
    }

    //? Find a skill by type
    #[Route('/api/skills/type/{type}', name: 'api_skills_get_type', methods: 'GET')]
    public function getItemType(SkillRepository $skillRepository, Request $request): Response
    {
        $type = $request->get('type');
        $skills = $skillRepository->findBy(['type' => $type]);
        return $this->json($skills, Response::HTTP_OK, [], ['groups' => 'skills_get']);
    }
}
