import React from 'react';

function LoginBar() {
    return (
        <div className="wrapperLoginCreate">
            {/* Docelowo te linki mogą być albo button-ami albo specjalnym komponentem (tak, żeby łatwiej było zestandaryzować stylowanie na stronie) */}
            {/* Zauważ, że "pod spodem" będą one musiały wyzwalać React Scroll-a (więc albo będą musiały używać Link z biblioteki, albo "ręcznie" będziesz musiał odpalać odpowiednią funkcję) */}
            <a href="#">Zaloguj</a>
            <a href="#">Załóż konto</a>
        </div>
    );
}
export default LoginBar;