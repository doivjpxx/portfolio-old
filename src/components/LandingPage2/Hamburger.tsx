import Link from 'next/link';
import React from 'react';
import { gsap } from "gsap";
import styled from "styled-components";
import {
  fadeInUp,
  handleCity, handleCityReturn,
  handleHover,
  handleHoverExit,
  staggerReveal,
  staggerRevealClose,
  staggerText
} from "./Animations";

const StyledHam = styled.div<{ $show: boolean }>`

  .hamburger-menu {
    display: ${p => p.$show ? 'block' : 'none'};
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;

    .menu-secondary-background-color {
      background: #191919;
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    .menu-layer {
      position: relative;
      background: #e20001;
      height: 100%;
      overflow: hidden;

      .menu-city-background {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
        background-repeat: no-repeat;
        animation-name: backgroundEffect;
        animation-duration: 30s;
        animation-iteration-count: infinite;
      }

      .wrapper {
        position: relative;

        .menu-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          top: 200px;

          nav {
            display: block;

            ul {
              padding: 0;
              margin: 0;

              li {
                list-style: none;
                font-size: 6rem;
                font-weight: 700;
                cursor: pointer;
                height: 135px;
                overflow: hidden;
                position: relative;
                width: 700px;

                a {
                  position: absolute;
                  color: #fff;
                  text-decoration: none;

                  &:hover {
                    color: #191919;
                  }
                }
              }
            }
          }

          .info {
            color: #fff;
            width: 300px;

            h3 {
              font-size: 1.2rem;
              margin: 0 auto;
            }

            p {
              margin: 0 auto;
              font-size: 0.8rem;
            }
          }
        }

        .locations {
          position: absolute;
          bottom: -88px;
          color: #fff;
          margin-top: 16px;
          font-size: 0.8rem;
          font-weight: 600;

          span {
            &:first-child {
              margin-left: 64px;
            }

            cursor: pointer;
            margin: 0 32px;
            transition: .3s ease-in-out;

            &:hover {
              background: #191919;
              padding: 8px 24px;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }

  @keyframes backgroundEffect {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 40% 10%;
    }
    50% {
      background-position: 0 10%;
    }
    75% {
      background-position: 10% 40%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const dallas = "assets/landing-page-2/dallas.webp";
const austin = "assets/landing-page-2/austin.webp";
const newyork = "assets/landing-page-2/newyork.webp";
const sanfrancisco = "assets/landing-page-2/sanfrancisco.webp";
const beijing = "assets/landing-page-2/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];


const Hamburger = ({ state }: any): JSX.Element => {

  const menuLayer = React.useRef<HTMLDivElement | null>(null);
  const reveal1 = React.useRef<HTMLDivElement | null>(null);
  const reveal2 = React.useRef<HTMLDivElement | null>(null);
  const info = React.useRef<HTMLDivElement | null>(null);
  const line1 = React.useRef<HTMLLIElement | null>(null);
  const line2 = React.useRef<HTMLLIElement | null>(null);
  const line3 = React.useRef<HTMLLIElement | null>(null);
  const cityBackground = React.useRef(null);

  React.useEffect(() => {
    if (state.clicked || (state.clicked && !state.initial)) {
      gsap.to(menuLayer.current, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1.current, reveal2.current], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1.current, reveal2.current);
      fadeInUp(info.current);
      staggerText(line1.current, line2.current, line3.current);
    } else {
      staggerRevealClose(reveal2.current, reveal1.current);
      // Set menu to display none
      gsap.to(menuLayer.current, { duration: 1, css: { display: "none" } });
    }
  }, [state]);

  return (
    <StyledHam $show={state.clicked}>
      <div ref={menuLayer} className="hamburger-menu">
        <div ref={reveal1} className="menu-secondary-background-color"></div>
        <div ref={reveal2} className="menu-layer">
          <div ref={cityBackground} className="menu-city-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li ref={line1} onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}>
                      <Link href="/">Opportunity</Link>
                    </li>
                    <li ref={line2} onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}>
                      <Link href="/">Solution</Link>
                    </li>
                    <li ref={line3} onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}>
                      <Link href="/">Contact us</Link>
                    </li>
                  </ul>
                </nav>
                <div ref={info} className="info">
                  <h3>Our Promise</h3>
                  <p>
                    The passage experienced a surge in popularity during the 1960s
                    when Letraset used it on their dry-transfer sheets, and again
                    during the 90s as desktop publishers bundled the text with
                    their software.
                  </p>
                </div>
                <div className="locations">
                  Locations:
                  {cities.map(el => (
                    <span
                      key={el.name}
                      onMouseEnter={() => handleCity(el.image, cityBackground.current)}
                      onMouseOut={() => handleCityReturn(cityBackground.current)}>
                    {el.name}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHam>
  );
};

export default Hamburger;
