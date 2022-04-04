import React from 'react';

import HomeBanner from "./HomeBanner";
import HomeBannerYellow from "./HomeBannerYellow";
import HomeBannerSmall from "./HomeBannerSmall";

function Home() {
    return (
        <>
            <HomeBanner />
            <HomeBannerYellow collectedBags={10}
                              supportedOrganizations={5}
                              organizedCollections={7} />
            <HomeBannerSmall />
        </>
    );
}

export default Home;