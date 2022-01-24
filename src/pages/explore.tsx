import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 6.75rem);
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const Card = styled.div`
  cursor: pointer;
  padding: 2rem 4rem;
  border: 3px solid #ffeded;
  border-radius: 8px;
  width: 250px;
  margin: 10%;

  &:hover {
    color: #ffffff;
    box-shadow: 0 10px 25px -2px #ffeded;
  }
`;

const Explore = (): JSX.Element => {
  const router = useRouter();
  return (
    <StyledSection>
      <Container>
        <Card>
          My landing pages
        </Card>
        <Card>My 3D projects</Card>
      </Container>
    </StyledSection>
  );
};

export default Explore;
