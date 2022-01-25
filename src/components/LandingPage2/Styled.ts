import styled from "styled-components";

export const StyledHam = styled.div<{ $show: boolean }>`
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
