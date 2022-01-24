import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 2.5rem);
  position: relative;
  color: #ffeded;
  background: #1e1a20;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: absolute;
  padding-left: 10%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 7vmin;
  padding: 0;
  margin: 0;
`;

const Description = styled.p`
  margin-top: 0.25rem;
`;

const Button = styled.button`
  margin-top: 1.25rem;
  padding: 0.75rem;
  width: fit-content;
  background: #ffeded;
  color: #1e1a20 !important;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  line-height: 0.8;
  padding: 18px 30px;
  text-transform: capitalize;
  border-radius: 1px;
  letter-spacing: 0.5px;
  border: 0px !important;
  cursor: pointer;
  border-radius: 100px;

  &:hover {
    background: #ffeded;
    color: #ffffff;
    box-shadow: 0 10px 25px -2px #ffeded;
  }
`;

function Dodecahedron() {
  const { viewport } = useThree();
  // viewport = canvas in 3d units (meters)

  const ref = React.useRef<any>();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.rotation.set(x, y, 0);
    ref.current.rotation.set(-y, x, 0);
  });

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

const Welcome = (): JSX.Element => {
  return (
    <StyledSection>
      <Container>
        <Title>Phong. H</Title>
        <Description>
          Front-end Engineer & Web Application/Creative Developer
        </Description>
        <Button>Explore more</Button>
      </Container>
      <Canvas style={{ zIndex: 1, position: 'absolute' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Dodecahedron />
      </Canvas>
    </StyledSection>
  );
};

export default Welcome;
