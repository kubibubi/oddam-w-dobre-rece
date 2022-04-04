import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
    return (
        <nav className='navigation__main'>
            <Link activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               onClick={this.scrollToTop}
               href="">Start</Link>
            <Link activeClass="active"
               to="howto"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               href="">O co chodzi?</Link>
            <Link activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               href="">O nas</Link>
            <Link activeClass="active"
               to="support"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               href="">Fundacja i organizacje</Link>
            <Link activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               href="">Kontakt</Link>
        </nav>
    );
}

export default NavBar;