<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

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
            TextField::new('email'),
            TextField::new('name'),
            TextField::new('last_name'),
            TextField::new('phone'),
            ChoiceField::new('roles')->allowMultipleChoices(true)
                ->setChoices([
                    'User' => 'ROLE_USER',
                    'Empleado' => 'ROLE_EMPLEADO',
                    'Admin' => 'ROLE_ADMIN',
                ]),
            Field::new('password')
                ->setFormType(PasswordType::class)
                ->onlyOnForms(),

        ];
    }
}
