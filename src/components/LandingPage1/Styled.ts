import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  & > div {
    padding: 0 0 30px;
    font-size: 20px;
  }
`;

export const Menu = styled.div`
  margin-right: auto;
`;

export const Lang = styled.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Media = styled.div`
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

export const Text = styled.div`
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

export const Sponsor = styled.div`
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

export const Distortion = styled.div`
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
`;

export const Wrapper = styled.div``;
