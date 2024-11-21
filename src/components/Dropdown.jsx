import React, { useState } from 'react'
import '../styles/css/dropdown.css'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="dropdown-menu">
      <button className="dropdown-title" onClick={toggleDropdown}>
        {title}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Dropdown
