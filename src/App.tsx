import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import GlobalStyles from './styles/global';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />

      <GlobalStyles />
    </Container>
  );
};

export default App;
