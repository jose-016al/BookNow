import React, { useEffect } from 'react';

const GetBookingDate = ({ date, onbookingDate }) => {


    useEffect(() => {
        fetchDatos();
    }, [date]);

    const fetchDatos = async () => {
        if (!date) {
            return;
        }

        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

        try {
            const url = "http://localhost:8000/api/bookings";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            const bookingsFiltrados = json.filter(booking => booking.date.date.split(' ')[0] === formattedDate);
            onbookingDate(bookingsFiltrados);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }


}

export default GetBookingDate;