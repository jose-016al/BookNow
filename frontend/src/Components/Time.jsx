import React, { useEffect, useState } from 'react';
import GetBookingTimes from './GetBookingDate';

const Time = ({ date, onTimeChange }) => {

    const [bookings, setBookings] = useState([]);
    const [selectedTime, setSelecteTime] = useState("");
    const [times, setTimes] = useState([]);
    const [horasDisponibles, sethorasDisponibles] = useState([]);

    const horas = [
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
        '17:00', '18:00', '19:00', '20:00', '21:00',
    ];

    useEffect(() => {
        // Filtrar las horas que no coinciden con los tiempos
        const filteredHours = horas.filter(hora => !times.includes(hora));
        sethorasDisponibles(filteredHours);
    }, [times]);

    const handleBookingChange = (booking) => {
        setBookings(booking);
        console.log(booking);
        // Extraer las horas de cada booking y guardarlas en el estado
        const extractedTimes = booking.map((bookingItem) => {
            const timeString = bookingItem.time.date;
            const dateObj = new Date(timeString);
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            return formattedTime;
        });
        setTimes(extractedTimes);
    };

    const handleTimeChange = (event) => {
        const selectedValue = event.target.value;
        setSelecteTime(selectedValue);
        onTimeChange(selectedValue);
    };


    return (
        <>
            <GetBookingTimes date={date} onbookingDate={handleBookingChange} />
            <select className='form-select form-select-sm' value={selectedTime} onChange={handleTimeChange}>
                <option value="" disabled>Selecciona una hora</option>
                {horasDisponibles.map((hora, index) => (
                    <option key={index} value={hora}>
                        {hora}
                    </option>
                ))}
            </select>
        </>
    );

}

export default Time;