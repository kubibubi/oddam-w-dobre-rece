import React from 'react';

import Decoration from '../Decoration/Decoration';
import Footer from '../Footer/Footer';

function HomeSectionContact() {
    return (
        <section className="home__section__contact">
            <div className="section__content__wrapper">
                <h3>Skontaktuj się z nami</h3>
                <Decoration/>
                <div className="section__form__wrapper">
                    <form action="">
                    <label htmlFor="contact__name">Wpisz swoje imię</label>
                    <input id='contact__name' type='text' placeholder='Imię'/>
                    <label htmlFor="contact__email">Wpisz swój email</label>
                    <input id='contact__email' type="text" placeholder='abc@xyz.ab'/>
                    <label htmlFor="contact__message">Wpisz swoją wiadomość</label>
                    <textarea id="contact__message" rows="4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid blanditiis consequuntur cupiditate eius laboriosam laudantium,
                        natus officiis omnis quae quo quod rem sapiente suscipit tenetur vel,
                        voluptate voluptatibus! Delectus, eos.</textarea>
                    <button className="contact__send__button btn">Wyślij</button>
                    </form>
                </div>
                <Footer/>
            </div>
        </section>
    );
}

export default HomeSectionContact;