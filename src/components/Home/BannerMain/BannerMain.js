import React from 'react';

import LoginBar from "../../LoginBar/LoginBar";
import NavBar from "../../NavBar/NavBar";
import ButtonAction from '../../ButtonAction/ButtonAction';
import Decoration from '../../Decoration/Decoration';

function HomeBanner() {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <section className="home__banner">
                <h3>Zacznij pomagać!</h3>
                <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
                <Decoration/>
                <ButtonAction btnText='ODDAJ RZECZY'/>
                <ButtonAction btnText='ZORGANIZUJ ZBIÓRKĘ'/>
            </section>
        </>
    );
}

export default HomeBanner;