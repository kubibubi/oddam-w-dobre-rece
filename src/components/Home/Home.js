import React from 'react';
import LoginBar from "../LoginBar";
import NavBar from "../NavBar";
import HomeBanner from "./HomeBanner";

function Home() {
    return (
        <>
            <LoginBar />
            <NavBar />
            <HomeBanner />
        </>
    );
}

export default Home;