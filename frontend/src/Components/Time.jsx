import React, { useState } from 'react';
import GetBookingTimes from './GetBookingDate';

const Time = ({ date, onTimeChange }) => {

    const [selectedTime, setSelecteTime] = useState("");
    const [horasDisponibles, sethorasDisponibles] = useState([]);

    const horas = [
        '09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45',
        '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45',
        '13:00', '13:15', '13:30', '13:45', '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30',
    ];

    const handleBookingChange = (booking) => {
        const horasFiltradas = filterAvailableHours(booking);
        sethorasDisponibles(horasFiltradas);
    };

    const filterAvailableHours = (bookings) => {
        // Obtener los tiempos finales de las reservas
        const finalTimes = bookings.map(bookingItem => {
            const timeString = bookingItem.time.date;
            const dateObj = new Date(timeString);
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            const duration = bookingItem.duration;
            const endTime = new Date(dateObj.getTime() + duration * 60000); // Multiplicar la duración por 60000 para convertir minutos a milisegundos

            // Ajustar el tiempo final a un múltiplo de 15 minutos
            const endHours = endTime.getHours();
            const endMinutes = Math.ceil(endTime.getMinutes() / 15) * 15;

            const finalTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            const endTimeString = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
            return { startTime: finalTime, endTime: endTimeString };
        });

        // Filtrar las horas que coinciden con los tiempos finales
        const filteredHours = horas.filter(hora => {
            for (let i = 0; i < finalTimes.length; i++) {
                const { startTime, endTime } = finalTimes[i];
                if (hora >= startTime && hora < endTime) {
                    return false;
                }
            }
            return true;
        });

        return filteredHours;
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