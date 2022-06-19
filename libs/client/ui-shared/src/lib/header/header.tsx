import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

const StyledHeader = styled.div`
  color: white;
  background-color: #0000009a;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h3>{props.title}</h3>
    </StyledHeader>
  );
}

export default Header;
