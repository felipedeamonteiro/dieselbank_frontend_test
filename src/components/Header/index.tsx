import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <div className="localization-button">
          <p>Nova localização</p>
          <button type="button">
            <AiOutlinePlus size={22} color="#fff" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
