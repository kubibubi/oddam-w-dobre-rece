import React from 'react';

import '../../scss/main.scss';

import BannerMain from "./BannerMain/BannerMain";
import BannerYellow from "./BannerYellow/BannerYellow";
import BannerSmall from "./BannerSmall/BannerSmall";
import BannerGuide from "./BannerGuide/BannerGuide";
import BannerButton from "./BannerButton/BannerButton";
import AboutUs from "./AboutUs/AboutUs";
import Support from "./Support/Support";
import Contact from "./Contact/Contact";

function Home() {
    return (
        <>
            <BannerMain/>
            <BannerYellow collectedBags={10}
                          supportedOrganizations={5}
                          organizedCollections={7}/>
            <BannerSmall/>
            <BannerGuide/>
            <BannerButton/>
            <AboutUs/>
            <Support/>
            <Contact/>
        </>
    );
}

export default Home;