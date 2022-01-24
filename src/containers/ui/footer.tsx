import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #1e1a20;
  color: #ffeded;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: end;
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Container>
        <small>© Coding with love</small>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
