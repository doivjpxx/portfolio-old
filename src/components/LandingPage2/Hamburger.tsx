import Link from 'next/link';
import React from 'react';
import styled from "styled-components";

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
      background: black;
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
      background: red;
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
                    color: black;
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
              background: black;
              padding: 8px 24px;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }

`

const Hamburger = ({ state }: any): JSX.Element => {

  return (
    <StyledHam $show={state.clicked}>
      <div className="hamburger-menu">
        <div className="menu-secondary-background-color"></div>
        <div className="menu-layer">
          <div className="menu-city-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link href="/">Opportunity</Link>
                    </li>
                    <li>
                      <Link href="/">Solution</Link>
                    </li>
                    <li>
                      <Link href="/">Contact us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="info">
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
                  <span>Dallas</span>
                  <span>Austin</span>
                  <span>New york</span>
                  <span>San Francisco</span>
                  <span>Beijing</span>
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
