import React from 'react';

import IconShirt from '../../assets/Icon-1.png'
import IconBag from '../../assets/Icon-2.png'
import IconGlass from '../../assets/Icon-3.png'
import IconUroboros from '../../assets/Icon-4.png'

function HomeBannerGuide(props) {
    return (
        <section className="home__banner__guide">
            <div className="banner__guide__info">
                <img src={IconShirt} alt="Ikona koszuli."/>
                <h4>Wybierz rzeczy</h4>
                <div className="afterPlaceholderRembemberThisStuffTooLongOnPurpose">---</div>
                <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="banner__guide__info">
                <img src={IconBag} alt="Ikona torby sugerująca zapakowanie przedmiotów do środka."/>
                <h4>Spakuj je</h4>
                <div className="afterPlaceholderRembemberThisStuffTooLongOnPurpose">---</div>
                <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="banner__guide__info">
                <img src={IconGlass} alt="Ikona lupy."/>
                <h4>Zdecyduj komu chcesz pomóc</h4>
                <div className="afterPlaceholderRembemberThisStuffTooLongOnPurpose">---</div>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className="banner__guide__info">
                <img src={IconUroboros} alt="Ikona recyklingu."/>
                <h4>Zamów kuriera</h4>
                <div className="afterPlaceholderRembemberThisStuffTooLongOnPurpose">---</div>
                <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
        </section>
    );
}

export default HomeBannerGuide;