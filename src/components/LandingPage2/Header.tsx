import React from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { createGlobalStyle } from 'styled-components';
import { useRouter, withRouter } from "next/router";

const Styles = createGlobalStyle`
  header {
    height: 100px;

    .inner-header {
      position: relative;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo a {
        font-weight: 700;
        text-decoration: none;
        color: black;
      }

      .menu {
        button {
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          font-size: 0.8rem;
          color: black;
        }
      }
    }


  }

`;
const Header = (): JSX.Element => {
  const router = useRouter();
  const [state, setState] = React.useState<any>({
    initial: false,
    clicked: false,
    menuName: "Menu"
  });

  const [disabled, setDisabled] = React.useState(false);

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Use Effect
  React.useEffect(() => {
    //Listening for page changes.
    const handleRouteChange = () => {
      setState({ clicked: false, menuName: "Menu" });
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router]);

  return (
    <header>
      <Styles/>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href="/">HAMERG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state}/>
    </header>
  );
};

export default withRouter(Header);
