import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Logo = require('../../assets/img/logo_w.png');
const Brunch = require('../../assets/img/sns_brunch.png');

const Container = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgb(25 25 25);
  padding: 50px 0;
  margin: 0;

  .centerdiv {
    width: 1210px;
    margin: 0px auto;
    padding: 0px 30px;
  }

  .footer-top {
    color: #fff;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
    }
    li {
      list-style: none;
      position: relative;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      color: #ccc;
      margin: 0 15px;
      cursor: pointer;
    }

    .footer-btn li {
      :last-child {
        :after {
          position: absolute;
          top: 7px;
          left: -15px;
          width: 1px;
          height: 10px;
          background: #ccc;
          content: '';
          opacity: 0.5;
          cursor: none;
        }
      }
    }
  }
  .logo {
    float: left;
    margin: 0 0 30px;
    img {
      width: 100px;
    }
  }

  .snslink {
    clear: both;
    float: left;
    width: 100%;
    margin: 30px 0 0 0;
    li {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;
      background: rgb(0 0 0 / 40%);
      border-radius: 100%;
      overflow: hidden;
      padding: 6px 0 0 0;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      :nth-child(1):hover {
        background: #18539a;
      }
      :nth-child(3):hover {
        background: #ff0000;
      }
      i {
        color: rgb(255 255 255);
        font-size: 27px;
      }
      img {
        height: 27px;
        margin: 1px 0 0 0;
      }
    }
  }
`;

const CompanyInfo = styled.div`
  clear: both;
  float: left;
  width: 100%;
  text-align: left;
  font-size: 0;

  ul {
    margin: 0;
    padding: 0;
    > div {
      :last-child {
        width: 100%;
        margin: 10px 0;
      }
    }
  }

  li {
    display: inline-block;
    margin: 0 30px 0 0;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(204 204 204);
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <div className='centerdiv'>
          <div className='footer-top'>
            <div className='logo'>
              <img src={Logo} alt='????????????' />
            </div>
            <div className='footer-btn'>
              <ul>
                <li>
                  <Link to='/privacy'>???????????? ????????????</Link>
                </li>
                <li>
                  <Link to='/terms'>???????????? ????????? ????????????</Link>
                </li>
              </ul>
            </div>
          </div>
          <CompanyInfo className='companyinfo'>
            <ul>
              <div>
                <li>(???)????????????</li>
                <li>??????????????? 561-88-01138</li>
                <li>?????? ?????????</li>
                <li>?????? ????????? ???????????? 37??? 7-9 ?????????????????????</li>
                <li>?????? 02-423-0525</li>
                <li>?????? 02-3432-0525</li>
              </div>
              <div>
                <li>?????? info@timf.co.kr</li>
                <li>?????? ??? ?????? ?????? sales@timf.co.kr</li>
              </div>
              <div>
                <li>
                  Copyright???
                  <Link to={'/admin'}>TeamFresh Co.,Ltd.</Link>
                  All Rights Reserved.
                </li>
              </div>
            </ul>
          </CompanyInfo>
          <div className='snslink'>
            <div className='snslink'>
              <ul>
                <li
                 
                >

                </li>
                <li
                  
                >
                  <img src={Brunch} alt='' />
                </li>
                <li
                  
                >
                  <i className='xi-youtube-play'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
