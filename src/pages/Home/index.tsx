import React from 'react';

import { parseJsonSourceFileConfigFileContent } from 'typescript';
import { Container } from './styles';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';

const Home: React.FC = () => {
  const items = ['Campinas', 'São Paulo', 'São Caetano do Sul', 'Londres'];

  return (
    <Container>
      <Header />
      <Dropdown title="Dropdown" items={items} />
    </Container>
  );
};

export default Home;
