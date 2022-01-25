import { createGlobalStyle } from 'styled-components';
import { Text, Menu, Sponsor, Wrapper, Lang, Media, NavBar, Distortion } from "../components/LandingPage1/Styled";

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

const LandingPage1 = (): JSX.Element => {
  return (
    <>
      <Styles/>
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
              collection 2017 <br/> duality
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
          <img src="./assets/landing-page-1/images/sponsor-logo.png" alt=""/>
          <p>official sponsor</p>
        </Sponsor>

        <Distortion className="distortion"></Distortion>
      </Wrapper>
    </>
  );
};

export default LandingPage1;
