import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #ffeded;
  height: 50px;
  display: flex;
  padding: 0 10%;
`;

const BackButton = styled.a`
  padding: 0.75rem;
  width: fit-content;
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
`;

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <StyledHeader>
      <BackButton
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        BACK
      </BackButton>
    </StyledHeader>
  );
};

export default Header;
