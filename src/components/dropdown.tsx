import React, { useState } from 'react';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); //using state to control dropdown opening and closing
  
  const handleDropdown = () => {
    setIsOpen(!isOpen); //toggle dropdown state
  };

  const handleSelection = (value: string) => {
    console.log(`Selected value: ${value}`); //log the selected value
    setIsOpen(false); //close dropdown
  };

  return (
    <div className='dropdown-container'>
      <button className='dropdown-header' onClick={handleDropdown}>
        Select a Branch
        {isOpen ? (
          <i className='fas fa-angle-up'></i>
        ) : (
          <i className='fas fa-angle-down'></i>
        )}
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          <li onClick={() => handleSelection('Computer Science')}>Computer Science</li>
          <li onClick={() => handleSelection('Mechanical Science')}>Mechanical Science</li>
          <li onClick={() => handleSelection('Civil')}>Civil</li>
          <li onClick={() => handleSelection('Electrical')}>Electrical</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
