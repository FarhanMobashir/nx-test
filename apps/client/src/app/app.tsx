import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Header } from '@nx-react-express/client/ui-shared';
import { useState } from 'react';
import { useEffect } from 'react';

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
  return <Header title={data || '...'} />;
}

export default App;
