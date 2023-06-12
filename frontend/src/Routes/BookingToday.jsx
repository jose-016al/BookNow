import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookingToday = () => {

    const [bookingNow, setBookingNow] = useState(null);
    const dateNow = new Date();
    const formattedDate = `${dateNow.getDate()}/${(dateNow.getMonth() + 1).toString().padStart(2, '0')}/${dateNow.getFullYear().toString().padStart(2, '0')}`;

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
            const date = `${dateNow.getFullYear()}-${(dateNow.getMonth() + 1).toString().padStart(2, '0')}-${dateNow.getDate().toString().padStart(2, '0')}`;
            const confirmadas = json.filter(booking => booking.status === 2 && formatDate(booking.date.date) === date);
            setBookingNow(confirmadas);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    /**
     * Se encarga de darle un formato a las fechas
     * @param {string} dateString La cadena de texto que representara la fecha
     * @returns La fecha formateada con "d-m-Y"
     */
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    /**
     * Se encarga de darle un formato a las horas 
     * @param {string} timeString La cadena que representara la hora
     * @returns La hora formeteada con "H:m"
     */
    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hora = time.getHours();
        const minutos = time.getMinutes();
        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    };
    
    return (
        <>
            <Header />
            <div className='container row justify-content-center mx-auto mt-4' style={{ minHeight: '310px' }}>
                <h2 className='text-center mb-4 mt-4'>Las citas de hoy { formattedDate }</h2>
                <div className='mt-4 col-11 col-md-6' id='containerCita'>
                    {bookingNow && bookingNow.length > 0 ? (
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingNow.map((cita, index) => (
                                    <tr key={cita.id}>
                                        <th>{index + 1}</th>
                                        <td>{cita.name + " " + cita.last_name}</td>
                                        <td>{ formatTime(cita.time.date) }</td>
                                        {cita.type.length > 0 && (
                                            <td>{ cita.type.map(type => type).join(', ') }</td>
                                        )}  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4 className='text-center'>No hay citas disponibles para hoy</h4>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookingToday;
