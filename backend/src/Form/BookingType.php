<?php

namespace App\Form;

use App\Entity\Booking;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\CallbackTransformer;

class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'Opcion1' => 'opcion1',
                    'Opcion2' => 'opcion2',
                ],
                'multiple' => false,
            ])
            ->add('date')
            ->add('time')
            ->add('duration')
            ->add('user');

        // Data transformer
        $builder->get('type')
            ->addModelTransformer(new CallbackTransformer(
                function ($typeArray) {
                    // transform the array to a string
                    return count($typeArray) ? $typeArray[0] : null;
                },
                function ($typeString) {
                    // transform the string back to an array
                    return [$typeString];
                }
            ));
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
