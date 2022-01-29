<?php

namespace App\Controller\Admin;

use App\Entity\Skill;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SkillCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Skill::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('name'),
            TextField::new('picture'),
            ChoiceField::new('knowledge')->setChoices([
                'Know' => 'know',
                'Coming' => 'coming',
                'Learning' => 'learning',
                'Use' => 'use',
            ]),
            ChoiceField::new('type')->setChoices([
                'Back' => 'back',
                'Front' => 'front',
                'Front_Back' => 'front_back',
                'Software' => 'software',
                'Other' => 'other',
            ]),
        ];
    }


    public function __toString()
    {
        return $this->name;
    }
}
