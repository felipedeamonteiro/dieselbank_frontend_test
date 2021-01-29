/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useCallback, useRef } from 'react';
import useOnClickOutside from 'react-cool-onclickoutside';
import { Container } from './styles';

interface DropdownProps {
  title: string;
  items: string[];
  multiSelect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  multiSelect = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const ref = useOnClickOutside(() => {
    setOpen(false);
  });

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleOnClick = useCallback(
    item => {
      if (!selection.some(current => current === item)) {
        if (!multiSelect) {
          setSelection([item]);
        } else if (multiSelect) {
          setSelection([...selection, item]);
        }
      } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          current => current !== item,
        );
        setSelection([...selectionAfterRemoval]);
      }
    },
    [multiSelect, selection],
  );

  const isItemInSelection = useCallback(
    item => {
      if (selection.find(current => current === item)) {
        return true;
      }
      return false;
    },
    [selection],
  );

  return (
    <Container>
      <h1>DropDown Menu</h1>
      <div
        tabIndex={0}
        className="dropdown_header"
        role="button"
        onKeyPress={() => handleToggle()}
        onClick={() => handleToggle()}
        style={{ cursor: 'pointer' }}
      >
        <div className="dropdown-header-title">
          <p className="dropdown-header-title-bold">{title}</p>
        </div>
        <div className="dropdown-header-action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <div>
          <ul ref={ref} className="dropdown-list">
            {items.map((item, index) => (
              <li className="dropdown-list-item" key={index}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item}</span>
                  <span>{isItemInSelection(item) && 'Selected...'}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Dropdown;
