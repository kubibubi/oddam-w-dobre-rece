import React from 'react';
import {Link} from "react-scroll";

function NavBar() {
    return (
        <nav className='navigation__main'>
            <ul className='navigation__wrapper'>
                <li className='navigation__element'>
                    <Link to='home__banner'
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}>Start</Link>
                </li>
                <li className='navigation__element'>
                    <Link to="home__banner__guide"
                          spy={true} smooth={true}
                          offset={50}
                          duration={500}>O co chodzi?</Link>
                </li>
                <li className='navigation__element'>
                    <Link to="home__section__about__us"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}>O nas</Link>
                </li>
                <li className='navigation__element'>
                    <Link to="home__section__support"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}>Fundacja i organizacje</Link>
                </li>
                <li className='navigation__element'>
                    <Link to="home__section__contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}>Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;