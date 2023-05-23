import React, { useEffect, useState } from 'react';

const GetBookingTypes = ({ bookingTypes }) => {

    const [types, setTypes] = useState(null);
    const [selectedType, setSelectedType] = useState(undefined); 


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
        setSelectedType(selectedType);
    };

    return (
        <>
            {types && (
                <select className='form-select form-select-sm' value={selectedType} onChange={handleTypesChange}>
                    <option value="">Selecciona un tipo de cita</option>
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
