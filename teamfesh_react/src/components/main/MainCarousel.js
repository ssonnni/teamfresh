import styled from 'styled-components';

const Container = styled.div`
position:relative;
  width: 100%;
  height:100vh;
  min-width: 1210px;
  overflow: hidden;
  ul{ display: flex;}
`;

const MainText = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  text-align: left;
  z-index: 20;
  margin-left: -575px;
  margin-top: -150px;

  .main-title {
    clear: both;
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    color: rgb(255 255 255);
    margin: 20px 0 30px;
  }

  .main-comment {
    clear: both;
    font-family: "Pretendard";
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: rgb(255 255 255);
  }

`;
const MainCarousel = () => {
  return (
    <>
    <Container>
        <MainText>
            <div className="main-title">
                대한민국 No.1
                <br/>
                Cold-chain platform
            </div>
            <div className="main-comment">
                팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
            </div>
        </MainText>

      <div id='slider'>
          <ul>
            <li className='slide-list'>
              <img
                src={require('../../assets/img/main_images01.jpg')}
                alt='slide-list'
              />
            </li>
            <li className='slide-list'>
              <img
                src={require('../../assets/img/main_images02.jpg')}
                alt='slide-list'
              />
            </li>
            <li className='slide-list'>
              <img
                src={require('../../assets/img/main_images03.jpg')}
                alt='slide-list'
              />
            </li>
          </ul>
      </div>
      </Container>
    </>
  );
};

export default MainCarousel;
