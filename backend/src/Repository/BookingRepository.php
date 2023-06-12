<?php

namespace App\Repository;

use App\Entity\Booking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpClient\HttpClient;

/**
 * @extends ServiceEntityRepository<Booking>
 *
 * @method Booking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Booking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Booking[]    findAll()
 * @method Booking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
    }

    public function save(Booking $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Booking $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Obtiene todas las reservas ordenadas por fecha y hora
     *
     * @return Booking[] El array de reservas ordenadas
     */
    public function findAllOrderedByDateTime(): array
    {
        return $this->createQueryBuilder('b')
            ->addOrderBy('b.date', 'ASC')
            ->addOrderBy('b.time', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Envia un correo electrónico para una reserva utilizando la API de Sendinblue.
     *
     * @param Booking $booking
     * @param string $message
     * @param HttpClientInterface $client
     *
     * @return Response
     */
    public function sendEmail(Booking $booking, $message): Response
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'https://api.sendinblue.com/v3/smtp/email', [
            'headers' => [
                'Content-Type' => 'application/json',
                'api-key' => $_ENV['MAILER_KEY'],
            ],
            'json' => [
                'sender' => [
                    'name' => 'BookNow',
                    'email' => 'no-reply@booknow.com',
                ],
                'to' => [
                    [
                        'name' => $booking->getUser()->getName(),
                        'email' => $booking->getUser()->getEmail(),
                    ],
                ],
                'subject' => 'Reserva',
                'htmlContent' => $message,
            ],
        ]);
        return new Response ($response->getContent());
    }

    //    /**
    //     * @return Booking[] Returns an array of Booking objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('b.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Booking
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
