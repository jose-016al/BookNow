import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookingConfirmed = () => {

    const [confirmed, setConfirmed] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchDatos();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "http://localhost:8000/api/bookings";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            const confirmadas = json.filter(booking => booking.status === 2);
            setConfirmed(confirmadas);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hora = time.getHours();
        const minutos = time.getMinutes();
        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Header />
            <div className='container mt-4' style={{ minHeight: '310px' }}>
                <h2>Citas confirmadas</h2>
                <div className='mt-4 row justify-content-center align-items-center'>
                    {confirmed && confirmed.length > 0 ? (
                        confirmed.map(cita => (
                            <div key={cita.id} className="card mb-5 mx-4 col-11 col-md-3" id='containerCita'>
                                <div className="card-body">
                                    <h5 className="card-title">{cita.name + " " + cita.last_name}</h5>
                                    <p className="card-text mb-0">Fecha: <b>{formatTime(cita.time.date) + " " + formatDate(cita.date.date)}</b></p>
                                    {cita.type.length > 0 && (
                                        <p className="card-text mt-0">Tipo de cita: <b>{cita.type.map(type => type).join(', ')}</b></p>
                                    )}  
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4 className='text-center'>No hay citas confirmadas</h4>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookingConfirmed;
