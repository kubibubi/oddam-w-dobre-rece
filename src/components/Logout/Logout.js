import React from 'react';
import {Link as LinkRoute} from 'react-router-dom';

import LoginBar from '../LoginBar/LoginBar';
import NavBar from '../NavBar';
import Decoration from '../Decoration';

function Logout() {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <section className="logout__section">
                <h3>Wylogowanie nastąpiło</h3>
                <h3>pomyślnie!</h3>
                <Decoration />
                <LinkRoute to='/'>Strona główna</LinkRoute>
            </section>
        </>
    );
}

export default Logout;