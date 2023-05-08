import React from 'react';
import Header from '../Components/Header';

const Citas = ({ user }) => {
    
    return (
        <>
            <Header user={user} />
            <h2>las citas de hoy</h2>
        </>
    );
}

export default Citas;
