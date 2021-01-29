/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useCallback } from 'react';

import { Container } from './styles';

interface DropdownProps {
  title: string;
  items: string[];
  multiSelect: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  multiSelect = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleOnClick = useCallback(item => {
    console.log('Opa');
  }, []);

  return (
    <Container>
      <h1>DropDown Menu</h1>
      <div
        tabIndex={0}
        className="dropdown_header"
        role="button"
        onKeyPress={() => handleToggle()}
        onClick={() => handleToggle()}
      >
        <div className="dropdown-header-title">
          <p className="dropdown-header-title-bold">{title}</p>
        </div>
      </div>
    </Container>
  );
};

export default Dropdown;
