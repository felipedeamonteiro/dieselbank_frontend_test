import React, { useCallback, useState } from 'react';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { Container } from './styles';

const Header: React.FC = () => {
  const [localizationButton, setLocalizationButton] = useState<boolean>(true);

  const handleAddNewLocalization = useCallback(() => {
    setLocalizationButton(false);
  }, []);

  return (
    <Container>
      <div className="main-div">
        {localizationButton ? (
          <div className="localization-button">
            <p>Nova localização</p>
            <button type="button" onClick={handleAddNewLocalization}>
              <AiOutlinePlus size={22} color="#fff" />
            </button>
          </div>
        ) : (
          <div className="search-input">
            <input type="text" />
            <AiOutlineSearch size={22} color="#fff" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
