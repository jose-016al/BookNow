import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

const BookingConfirmed = () => {

    const localizer = momentLocalizer(moment);
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
        } catch (error) {
            console.log("error: " + error);
        }
    };

    /**
     * Se encarga de darle un formato a las fechas
     * @param {string} dateString La cadena de texto que representara la fecha
     * @returns La fecha formateada con "Y-m-d"
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
     * @returns La hora formeteada con "H:m:s"
     */
    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hora = time.getHours();
        const minutos = time.getMinutes();
        const segundos = time.getSeconds();
        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    };

    /**
     * Crea un array de eventos de calendario para las citas confirmadas
     */
    const BookingsCalendar = confirmed.map(cita => ({
        title: `${cita.name} ${cita.last_name}`,
        start: new Date(formatDate(cita.date.date) + 'T' + formatTime(cita.time.date)),
        end: new Date(formatDate(cita.date.date) + 'T' + formatTime(cita.time.date)),
    }));

    return (
        <>
            <Header />
            <div className='container mt-4' >
                <h2 className='text-center mb-4 mt-4'>Citas confirmadas</h2>
                <div>
                    <Calendar
                        localizer={localizer}
                        events={BookingsCalendar}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 700 }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookingConfirmed;
