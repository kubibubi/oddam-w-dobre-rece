import React from 'react';

import IconFacebook from './Facebook.png';
import IconInstagram from './Instagram.png';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">Copyright by CodersLab</p>
            <img src={IconFacebook} alt="Logo Facebooka."/>
            <img src={IconInstagram} alt="Logo Instagrama."/>
        </footer>
    );
}

export default Footer;