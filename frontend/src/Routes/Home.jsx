import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import lavado from '../img/lavado.jpg';


const Home = () => {
    
    return (
        <>
            <Header  />
            <div className='container-fluid mx-auto row justify-content-center' style={{ minHeight: '310px' }}>
                <div className='col-11 col-md-10 mt-5' id='banner'>
                    <h4 class="text-center">Descubre el poder de un nuevo look</h4>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>¿Quienes somos?</h2>
                    <p className='text-center'>En [Nombre de la Peluquería], somos un equipo apasionado de estilistas dedicados a realzar tu belleza y potenciar tu confianza. Con años de experiencia en el cuidado del cabello, ofrecemos servicios de vanguardia que van desde cortes y peinados hasta coloraciones y tratamientos capilares personalizados. Nuestro enfoque se basa en escuchar tus necesidades y deseos para crear un estilo que refleje tu personalidad única. Nos esforzamos por brindarte una experiencia excepcional en un ambiente cálido y acogedor. ¡Confía en nosotros para transformar tu cabello y potenciar tu estilo!</p>
                </div>
                <div className='col-12 col-md-10 mt-4 border-top'>
                    <h2>Tipo de servicios que ofrecemos</h2>
                    <div className="services-images">
                        <img src={lavado} alt="Lavado cabello" />
                        <img src="ruta-imagen-peinado.jpg" alt="Peinado" />
                        <img src="ruta-imagen-coloracion.jpg" alt="Coloración" />
                        <img src="ruta-imagen-tratamiento.jpg" alt="Tratamiento capilar" />
                    </div>
                </div>
                <div id='horario'>
                    <h2>Nuestros horarios</h2>
                </div>
                <div id='ubicacion'>
                    <h2>¿Donde nos encontrmaos?</h2>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
