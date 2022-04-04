import React from 'react';

function HomeBannerYellow({ collectedBags, supportedOrganizations, organizedCollections }) {
    return (
        <section className="home__banner__yellow">
            <div className="banner__yellow__info">
                <h2>{collectedBags}</h2>
                <h4>oddanych worków</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="banner__yellow__info">
                <h2>{supportedOrganizations}</h2>
                <h4>wspartych organizacji</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="banner__yellow__info">
                <h2>{organizedCollections}</h2>
                <h4>zorganizowanych zbiórek</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    );
}

export default HomeBannerYellow;