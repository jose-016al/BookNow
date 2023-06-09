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
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "http://localhost:8000/api/bookings";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            const confirmadas = json.filter(booking => booking.status === 2);
            setConfirmed(confirmadas);
            console.log(json[0].formatDate(json[0].date.date) + 'T' + formatTime(json[0].time.date));
        } catch (error) {
            console.log("error: " + error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hora = time.getHours();
        const minutos = time.getMinutes();
        const segundos = time.getSeconds();
        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    };

    const BookingsCalendar = confirmed.map(cita => ({
        title: `${cita.name} ${cita.last_name}`,
        start: new Date(formatDate(cita.date.date) + 'T' + formatTime(cita.time.date)),
        end: new Date(formatDate(cita.date.date) + 'T' + formatTime(cita.time.date)),
    }));

    return (
        <>
            <Header />
            <div className='container mt-4' >
                <h2>Citas confirmadas</h2>
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
