import React from 'react';

import LoginBar from '../LoginBar';
import NavBar from '../NavBar';
import Decoration from '../Decoration';

function Login() {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <section className="login__section">
                <h3>Zaloguj się</h3>
                <Decoration/>
                <div className="login__section__wrapper">
                    <h4>Email</h4>
                    <input type="text"/>
                    <h4>Hasło</h4>
                    <input type="password"/>
                </div>
                <LoginBar/>
            </section>
        </>
    );
}

export default Login;