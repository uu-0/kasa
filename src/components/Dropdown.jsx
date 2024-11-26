import React, { useState } from 'react';
import '../styles/css/dropdown.css';

function Dropdown({ className, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <button className="dropdown-title" onClick={toggleDropdown}>
        {title}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Dropdown;
