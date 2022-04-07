import React from 'react';

import People from '../../assets/People.png';
import Signatures from '../../assets/Signature.svg';
import Decoration from '../Decoration/Decoration';

function HomeSectionAboutUs() {
    return (
        <section className="home__section__about__us">
            <div className="about__us__content__wrapper">
                <h3>O nas</h3>
                <Decoration />
                <p className="about__us__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signatures} alt="Boss Signature."/>
            </div>
            <img src={People} alt="Happy people of different race."/>
        </section>
    );
}

export default HomeSectionAboutUs;