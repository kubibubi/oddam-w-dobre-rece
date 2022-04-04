import React from 'react';

import HomeBanner from "./HomeBanner";
import HomeBannerYellow from "./HomeBannerYellow";
import HomeBannerSmall from "./HomeBannerSmall";
import HomeBannerGuide from "./HomeBannerGuide";
import HomeBannerButton from "./HomeBannerButton";

function Home() {
    return (
        <>
            <HomeBanner />
            <HomeBannerYellow collectedBags={10}
                              supportedOrganizations={5}
                              organizedCollections={7} />
            <HomeBannerSmall />
            <HomeBannerGuide />
            <HomeBannerButton />
        </>
    );
}

export default Home;