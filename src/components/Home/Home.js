import React from 'react';

import LoginBar from "../LoginBar";
import NavBar from "../NavBar";
import HomeBanner from "./HomeBanner";

function Home() {
    return (
        <>
            {/* LoginBar i Navbar mogą być częścią HomeBanner-a, jeśli chcesz - wtedy łatwiej będzie dopasować obrazek w tej pierwszej sekcji*/}
            {/*Poza tym - dobrze podzielone komponenty Login i Nav ;) */}
            <LoginBar />
            <NavBar />
            <HomeBanner />
        </>
    );
}

export default Home;