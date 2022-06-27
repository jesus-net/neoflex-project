import '@components/Footer/Footer.scss';

import footerLogo from '@img/logo-company-mini.svg';

const Footer = () => (
    <footer className="footer">
        <img src={footerLogo} alt="logo footer"></img>
        <nav className="footer__nav"></nav>
    </footer>
)

export default Footer;
