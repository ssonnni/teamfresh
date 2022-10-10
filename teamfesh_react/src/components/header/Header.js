import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <>
        <header id="header">
            <Link to="/">
                <img src="../assets/img/logo_w.png" alt="TeamFresh logo"/>
            </Link>
            <Nav/>
        </header>
        </>
    );
};

export default Header;