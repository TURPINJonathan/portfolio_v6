<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email'),
            Field::new('password')->hideOnIndex(),
            ChoiceField::new('roles')->setChoices(['Administrateur' => 'ROLE_ADMIN'])->allowMultipleChoices(),
            Field::new('firstname'),
            Field::new('lastname'),
            UrlField::new('picture'),
            TextareaField::new('description'),
            AssociationField::new('skills'),
            UrlField::new('link_github'),
            UrlField::new('link_linkedin'),
            UrlField::new('link_twitter'),
            UrlField::new('link_facebook'),
            UrlField::new('link_instagram'),
            UrlField::new('link_twitch'),
            UrlField::new('link_discord'),
            UrlField::new('link_tiktok'),
        ];
    }


    public function __toString()
    {
        return $this->name;
    }
}
