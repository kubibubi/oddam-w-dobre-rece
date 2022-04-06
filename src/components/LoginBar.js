import React from 'react';
import {Link as LinkRoute} from 'react-router-dom';

function LoginBar() {
    return (
        <div className="login__create__wrapper">
            <LinkRoute to='/login' className="login__link">Zaloguj</LinkRoute>
            <LinkRoute to='/register' className="create__link">Załóż konto</LinkRoute>
        </div>
    );
}
export default LoginBar;