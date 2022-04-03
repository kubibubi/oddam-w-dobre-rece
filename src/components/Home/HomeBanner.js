import React from 'react';
import ButtonAction from '../ButtonAction';

function HomeBanner() {
    return (
        <>
        <div className="home__banner">
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <ButtonAction btnText='ODDAJ RZECZY' />
            <ButtonAction btnText='ZORGANIZUJ ZBIÓRKĘ' />
        </div>
        </>
    );
}

export default HomeBanner;