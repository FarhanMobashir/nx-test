import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClientUiSharedProps {}

const StyledClientUiShared = styled.div`
  color: pink;
`;

export function ClientUiShared(props: ClientUiSharedProps) {
  return (
    <StyledClientUiShared>
      <h1>Welcome to ClientUiShared!</h1>
    </StyledClientUiShared>
  );
}

export default ClientUiShared;
