import { createGlobalStyle } from 'styled-components';
import LandingPage from '../components/LandingPage2/Home';


const Styles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap");
  
  body {
    background: #fff;
    color: #191919;
    padding: 0;
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .container {
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;

    .wrapper {
      padding: 0 48px;

      .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        p {
          font-size: .75rem;
          letter-spacing: .3rem;
          text-transform: uppercase;
          font-weight: 500;
        }

        h5 {
          margin-top: 260px;
          font-size: 1.8rem;
          font-weight: 600;
          padding-right: 364px;
        }
      }
    }
  }
`;

const LandingPage2 = (): JSX.Element => {
  return (
    <>
      <Styles/>
      <LandingPage/>
    </>
  );
};

export default LandingPage2;
