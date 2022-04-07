import React from 'react';

import Decoration from '../Decoration/Decoration';

function HomeSectionSupport() {
    return (
        <section className="home__section__support">
            <div className="support__content__wrapper">
                <h3>Komu pomagamy?</h3>
                <Decoration/>
                <button className="support__button btn">Fundacjom</button>
                <button className="support__button btn">Organizacjom pozarządowym</button>
                <button className="support__button btn">Lokalnym zbiórkom</button>
            </div>
            <div className="support__render__wrapper">
                <h4 className="support__organization__title">Placeholder</h4>
                <p className="support__text">Placeholder</p>
                <p className="support__accepted">Placeholder</p>
                <div className="support__render__page__number">1.. 2.. 3.. im placeholder</div>
                <div className="superLongPlaceholderForAfterElementToRemember">---</div>
            </div>
        </section>
    );
}

export default HomeSectionSupport;