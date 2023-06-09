import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import lavado from '../img/lavado.jpg';
import corte from '../img/corte.jpg';
import peinado from '../img/peinado.jpg';
import tinte from '../img/tinte.jpg';
import alisado from '../img/alisado.jpg';
import moldeador from '../img/moldeador.jpg';
import mechas from '../img/mechas.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <Header />
            <div className='container-fluid mx-auto row justify-content-center'>
                <div className='col-11 col-md-10 mt-5' id='banner'>
                    <h4 class="text-center">Descubre el poder de un nuevo look</h4>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>¿Quienes somos?</h2>
                    <p className='text-center'>En [Nombre de la Peluquería], somos un equipo apasionado de estilistas dedicados a realzar tu belleza y potenciar tu confianza. Con años de experiencia en el cuidado del cabello, ofrecemos servicios de vanguardia que van desde cortes y peinados hasta coloraciones y tratamientos capilares personalizados. Nuestro enfoque se basa en escuchar tus necesidades y deseos para crear un estilo que refleje tu personalidad única. Nos esforzamos por brindarte una experiencia excepcional en un ambiente cálido y acogedor. ¡Confía en nosotros para transformar tu cabello y potenciar tu estilo!</p>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>Tipo de servicios que ofrecemos</h2>
                    <Slider {...settings}>
                        <div className='slide-item'>
                            <img src={lavado} alt="Lavado" />
                            <h2 className='text-center'>Lavado</h2>
                        </div >
                        <div className='slide-item'>
                            <img src={corte} alt="Corte" />
                            <h2 className='text-center'>Corte</h2>
                        </div>
                        <div className='slide-item'>
                            <img src={peinado} alt="Peinado" />
                            <h2 className='text-center'>Peinado</h2>
                        </div>
                        <div className='slide-item'>
                            <img src={tinte} alt="Tinte" />
                            <h2 className='text-center'>Tinte</h2>
                        </div>
                        <div className='slide-item'>
                            <img src={alisado} alt="Alisado" />
                            <h2 className='text-center'>Alisado</h2>
                        </div>
                        <div className='slide-item'>
                            <img src={moldeador} alt="Moldeador" />
                            <h2 className='text-center'>Moldeador</h2>
                        </div>
                        <div className='slide-item'>
                            <img src={mechas} alt="Mechas" />
                            <h2 className='text-center'>Mechas</h2>
                        </div>
                    </Slider>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>Nuestros horarios</h2>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-4'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Dia</th>
                                        <th scope="col">Horario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lunes a Viernes</td>
                                        <td>9:00 AM - 2:00 PM<br />5:00 PM - 7:30 PM</td>

                                    </tr>
                                    <tr>
                                        <td>Sábados y Domingos</td>
                                        <td>Cerrado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>¿Donde nos encontrmaos?</h2>
                    <div className='text-center'><iframe title="Ubicación de la peluquería" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.649270361915!2d-3.5896577248530153!3d37.161038347277376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fca96f756d51%3A0x709bb607e44fcffc!2sC.%20Jos%C3%A9%20Tamayo%2C%208%2C%2018008%20Granada!5e0!3m2!1ses!2ses!4v1686336497587!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
