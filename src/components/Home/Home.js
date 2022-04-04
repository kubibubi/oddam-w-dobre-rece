import React from 'react';

import HomeBanner from "./HomeBanner";
import HomeBannerYellow from "./HomeBannerYellow";
import HomeBannerSmall from "./HomeBannerSmall";
import HomeBannerGuide from "./HomeBannerGuide";
import HomeBannerButton from "./HomeBannerButton";
import HomeSectionAboutUs from "./HomeSectionAboutUs";
import HomeSectionSupport from "./HomeSectionSupport";
import HomeSectionContact from "./HomeSectionContact";

function Home() {
    return (
        <>
            <HomeBanner name='start'/>
            <HomeBannerYellow collectedBags={10}
                              supportedOrganizations={5}
                              organizedCollections={7} />
            <HomeBannerSmall name='howto'/>
            <HomeBannerGuide />
            <HomeBannerButton />
            <HomeSectionAboutUs name='about'/>
            <HomeSectionSupport name='support'/>
            <HomeSectionContact name='contact'/>
        </>
    );
}

export default Home;