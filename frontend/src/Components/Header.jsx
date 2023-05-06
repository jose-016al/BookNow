import React from 'react';
import Nav from './Nav';

const Header = ({ user }) => {
    return (
        <header className='container'>
            <h1>BookNow</h1>
            <Nav user={user} />
        </header>
    );
}

export default Header;
