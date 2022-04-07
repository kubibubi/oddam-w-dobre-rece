import React from 'react';

import LoginBar from '../LoginBar/LoginBar';
import NavBar from '../NavBar/NavBar';
import Decoration from '../Decoration';

function Register() {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <section className="register__section">
                <h3>Zaloguj się</h3>
                <Decoration/>
                <div className="register__section__wrapper">
                    <h4>Email</h4>
                    <input type="text"/>
                    <h4>Hasło</h4>
                    <input type="password"/>
                    <h4>Powtórz hasło</h4>
                    <input type="password"/>
                </div>
                <LoginBar/>
            </section>
        </>
    );
}

export default Register;