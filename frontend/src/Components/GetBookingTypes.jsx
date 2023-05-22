import React, { useEffect, useState } from 'react';

const GetBookingTypes = ({ bookingTypes }) => {

    const [types, setTypes] = useState(null);

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "http://localhost:8000/api/bookingsTypes";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setTypes(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    const handleTypesChange = (event) => {
        const selectedType = event.target.value;
        const type = types.find((type) => type.type === selectedType);
        if (type) {
            bookingTypes(type); // Pasar el tipo de cita seleccionado
        }
    };

    return (
        <>
            {types && (
                <select value="" onChange={handleTypesChange}>
                    <option value="" disabled>Selecciona un tipo de cita</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.type}>
                            {type.type}
                        </option>
                    ))}
                </select>
            )}
        </>
    );

}

export default GetBookingTypes;
