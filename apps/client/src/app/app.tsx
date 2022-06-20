import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import { Header } from '@nx-react-express/client/ui-shared';
import { useState } from 'react';
import { useEffect } from 'react';
import capitalize from 'libs/client/utils/src/capitalize';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((d) => d.json())
      .then((d) => setData(d.message));
  }, []);
  return (
    <>
      <Header title={capitalize(data) || '...'} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        dolores in necessitatibus, error quasi soluta id, repellendus magni
        voluptas excepturi nobis eos illo. Nemo, recusandae mollitia iste
        suscipit similique dolor labore aut officia optio placeat! Consequuntur
        ab dolore vitae mollitia?
      </p>
      <ul>
        <li>{capitalize('hello')}</li>
      </ul>
    </>
  );
}

export default App;
