import {Link } from 'react-router-dom';
import styled from 'styled-components';




const NavBox = styled.div`
  // float: right;
  // transition: all 0.2s ease 0s;
  // margin: 16px 0px 0px;

  // nav {
  //   padding: 0px;
  //   margin: 0px;
  //   font-size: 0px;
  //   line-height: 0;
  //   display: block;
  //   list-style-type: disc;
  //   margin-block-start: 1em;
  //   margin-block-end: 1em;
  //   margin-inline-start: 0px;
  //   margin-inline-end: 0px;
  //   padding-inline-start: 40px;
  // }

  // .nav-list {
  //   position: relative;
  //   display: inline-block;
  //   font-size: 18px;
  //   margin-left: 40px;
  //   transition: all 0.2s ease 0s;
  // }

  // .nav-list::before {
  //   position: absolute;
  //   bottom: 0px;
  //   left: 0px;
  //   width: 0px;
  //   height: 1px;
  //   background: rgb(255, 255, 255);
  //   content: ' ';
  //   transition: all 0.1s ease 0s;
  // }
  // span {
  //   font-weight: 350;
  //   font-size: 18px;
  //   line-height: 30px;
  //   color: rgb(255, 255, 255);
  //   text-decoration: none;
  //   padding: 5px 0px;
  // }
  // .nsubmenu {
  //   position: absolute;
  //   width: 140px;
  //   top: 17px;
  //   left: 50%;
  //   margin-left: -70px;
  //   display :none;
  // }
`;

const Nav = () => {
  return (
    <>
      <NavBox>
        <nav>
          <div>
            {/* ----------01.회사소개------------ */}
            <Link to='/business' className='nav-list'>
              <span className='ntext'>회사소개</span>
              <div className='nsubmenu' id='nsubmenu01'></div>
            </Link>

            {/* ----------02.서비스소개------------ */}
            <Link to='/service' className='nav-list'>
              <span className='ntext'>서비스소개</span>
              <div className='nsubmenu' id='nsubmenu02'>
                <Link to='/service'>
                  <span>물류</span>
                </Link>
                <Link to='/service/distribution'>
                  <span>유통</span>
                </Link>
                <Link to='/service/franchise'>
                  <span>프랜차이즈</span>
                </Link>
                <Link to='/service/insurance'>
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
                <Link to='/customer'>
                  <span>공지사항</span>
                </Link>
                <Link to='/customer/timfnews'>
                  <span>팀프뉴스</span>
                </Link>
                <Link to='/customer/inquiry'>
                  <span>문의하기</span>
                </Link>
                <Link to='/customer/fag'>
                  <span>자주 묻는 질문</span>
                </Link>
              </div>
            </Link>
    

            {/* ----------05.배송지역검색------------ */}
            <Link to='/recruit' className='nav-list'>
              <span className='ntext'>배송 지역 검색</span>
              <div className='nsubmenu' id='nsubmenu05'></div>
            </Link>
          </div>
        </nav>
      </NavBox>
    </>
  );
};

export default Nav;
