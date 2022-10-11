import { Link } from 'react-router-dom';
import styled from "styled-components";
import Nav from './Nav';

const HeaderBox = styled.div`
backdrop-filter: blur(2px);
position: fixed;
width: 100%;
text-align: center;
z-index: 150;
transition: all 0.2s ease 0s;

header {
    width: 1210px;
    margin: 0px auto;
    padding: 0px 30px;
    box-sizing: border-box;
}
.logo {
    float: left;
    margin: 20px 0px
}
img {
    width:110px;
}
`;

const Header = () => {
    return (
        <>
        <HeaderBox>
        <header id="header">
            <Link to="/" className="logo">
                <img src={require("../../assets/img/logo_w.png" )}alt="TeamFresh logo"/>
            </Link>
            <Nav/>
        </header>
        </HeaderBox>
        </>
    );
};

export default Header;