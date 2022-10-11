import {Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBox = styled.nav`
  float: right;
  transition: all 0.2s ease 0s;
  margin: 16px 0px 0px;

  .nav-list {
    position: relative;
    display: inline-block;
    margin-left: 40px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }

  .nav-list::before {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background: rgb(255, 255, 255);
    content: ' ';
    transition: all 0.1s ease 0s;
  }
  .nav-list:hover::before {
    width:100%
  }
  span {
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 5px 0px;
  }
  .nsubmenu {
    position: absolute;
    width: 140px;
    top: 50px;
    left: 50%;
    margin-left: -70px;
    box-shadow: rgb(0 0 0 / 15%) 2px 2px 2px;

  }
.nsub-list {
  display: table;
  width: 140px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease 0s;
  margin-block-start: 0px;
}

.nsub-list span {
  display:table-cell;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: rgb(255, 255, 255);
    text-decoration: none;
}
`;

const Nav = () => {
  return (
    <>
      <NavBox>
            {/* ----------01.회사소개------------ */}
            <Link to='/business' className='nav-list'>
              <span className='ntext'>회사소개</span>
              <div className='nsubmenu' id='nsubmenu01'></div>
            </Link>

            {/* ----------02.서비스소개------------ */}
            <Link to='/service' className='nav-list'>
              <span className='ntext'>서비스소개</span>
              <div className='nsubmenu' id='nsubmenu02'>
                <Link to='/service' className='nsub-list'>
                  <span>물류</span>
                </Link>
                <Link to='/service/distribution' className='nsub-list'>
                  <span>유통</span>
                </Link>
                <Link to='/service/franchise' className='nsub-list'>
                  <span>프랜차이즈</span>
                </Link>
                <Link to='/service/insurance' className='nsub-list'>
                  <span>보험</span>
                </Link>
              </div>
            </Link>

            {/* ----------03.인재채용------------ */}
            <Link to='/recruit' className='nav-list'>
              <span className='ntext'>인재채용</span>
              <div className='nsubmenu' id='nsubmenu03'></div>
            </Link>

            {/* ----------04.고객지원------------ */}
            <Link to='/customer' className='nav-list'>
              <span className='ntext'>고객지원</span>
              <div className='nsubmenu' id='nsubmenu04'>
                <Link to='/customer'className='nsub-list'>
                  <span>공지사항</span>
                </Link>
                <Link to='/customer/timfnews'className='nsub-list'>
                  <span>팀프뉴스</span>
                </Link>
                <Link to='/customer/inquiry'className='nsub-list'>
                  <span>문의하기</span>
                </Link>
                <Link to='/customer/fag'className='nsub-list'>
                  <span>자주 묻는 질문</span>
                </Link>
              </div>
            </Link>
    
            {/* ----------05.배송지역검색------------ */}
            <Link to='/delivery' className='nav-list'>
              <span className='ntext'>배송 지역 검색</span>
              <div className='nsubmenu' id='nsubmenu05'></div>
            </Link>
      </NavBox>
    </>
  );
};

export default Nav;
