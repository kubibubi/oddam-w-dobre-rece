import React from 'react';
import ButtonAction from '../ButtonAction';

function HomeBanner() {
    return (
        //Nie potrzebujesz tego "fragmentu" - może zostać jedynie div. Fragment przydaje się, jak chce się zgrupować elementy bez div-a (albo innego widocznego w DOM/HTML stronki elementu)
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