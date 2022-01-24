import styled, { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

body {
  font-family: 'Poppins';
  background: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

ul {
  list-style: none;
}

`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  & > div {
    padding: 0 0 30px;
    font-size: 20px;
  }
`;

const Menu = styled.div`
  margin-right: auto;
`;

const Lang = styled.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Media = styled.div`
  ul {
    position: absolute;
    bottom: 250px;
    left: -140px;
    transform: rotate(-90deg);
  }

  ul li {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    display: inline-block;
    padding: 0 30px;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 200px;
  left: 100px;
  transform: rotate(-90deg);

  h1 {
    font-size: 120px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -10px;
    margin-bottom: 20px;

    position: relative;
    overflow: hidden;
    height: 150px;
    width: 600px;

    & .hidetext {
      position: absolute;
    }
  }

  h2 {
    position: absolute;
    top: 40px;
    left: -80px;
    color: #efde74;
    z-index: -1;
    font-size: 150px;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;

    position: relative;
    overflow: hidden;
    height: 80px;

    & hidetext {
      position: absolute;
    }
  }

  p {
    width: 200px;
    font-size: 12px;
    margin-top: 30px;
    font-weight: 500;

    position: relative;
    overflow: hidden;
    height: 110px;

    & hidetext {
      position: absolute;
    }
  }
`;

const Sponsor = styled.div`
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;

  & img {
    width: 200px;
    transform: rotate(-90deg);
  }

  & p {
    margin-top: 20px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const Distortion = styled.div`
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
`;

const Wrapper = styled.div``;

const LandingPage1 = (): JSX.Element => {
  return (
    <>
      <Styles />
      <Wrapper>
        <NavBar>
          <Menu>{/* <ion-icon name="ios-menu"></ion-icon> */}</Menu>
          <Lang>eng</Lang>
          <div className="search">
            {/* <ion-icon name="ios-search"></ion-icon> */}
          </div>
        </NavBar>

        <Media>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </Media>

        <Text>
          <h1>
            <span className="hidetext">toni&guy</span>
          </h1>
          <h2>duality</h2>
          <h3>
            <span className="hidetext">
              collection 2017 <br /> duality
            </span>
          </h3>
          <p>
            <span className="hidetext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              quis, delectus facere neque sunt commodi quae culpa dolores
              doloribus magnam?
            </span>
          </p>
        </Text>

        <Sponsor>
          <img src="./assets/landing-page-1/images/sponsor-logo.png" alt="" />
          <p>official sponsor</p>
        </Sponsor>

        <Distortion className="distortion"></Distortion>
      </Wrapper>
    </>
  );
};

export default LandingPage1;
