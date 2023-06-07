import React, { useEffect, useState } from 'react';

const GetBookingTypes = ({ bookingTypes }) => {

    const [types, setTypes] = useState(null);
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        fetchDatos();
        bookingTypes(selectedTypes);
    }, [selectedTypes]);


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
        const selectedValue = event.target.value;
        const selectedType = types.find((type) => type.type === selectedValue);

        setSelectedTypes((prevSelectedTypes) => {
            const isTypeSelected = prevSelectedTypes.some((type) => type.type === selectedValue);

            if (isTypeSelected) {
                return prevSelectedTypes.filter((type) => type.type !== selectedValue);
            } else {
                return [...prevSelectedTypes, selectedType];
            }
        });
    };

    return (
        <>
            {types && (
                <select className='form-select form-select-sm' multiple value={selectedTypes} onChange={handleTypesChange}>
                    {types.map((type, index) => (
                        <option key={index} value={type.type} className={`selectTypeBooking ${selectedTypes.some((selectedType) => selectedType.type === type.type) ? 'active' : ''}`}>
                            {type.type}
                        </option>
                    ))}
                </select>
            )}
        </>
    );

}

export default GetBookingTypes;
