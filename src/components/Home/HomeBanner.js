import React from 'react';

import LoginBar from "../LoginBar";
import NavBar from "../NavBar";
import ButtonAction from '../ButtonAction';
import Decoration from '../Decoration';

function HomeBanner() {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <div className="home__banner">
                <h3>Zacznij pomagać!</h3>
                <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
                <Decoration/>
                <ButtonAction btnText='ODDAJ RZECZY'/>
                <ButtonAction btnText='ZORGANIZUJ ZBIÓRKĘ'/>
            </div>
        </>
    );
}

export default HomeBanner;