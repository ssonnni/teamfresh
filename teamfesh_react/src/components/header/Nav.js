import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <Link to='/business' className='nav-list'>
            <span className='ntext'>회사소개</span>
            <div className='nsubmenu' id='nsubmenu01'></div>
          </Link>

          <Link to='/service' className='nav-list'>
            <span className='ntext'>서비스소개</span>
            <div className='nsubmenu' id='nsubmenu02'>
              <Link to='/service'>
                <span>물류</span>
              </Link>
              <Link to='/service/distriution'>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
