import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import './searchinterface.css';

const SearchInterface = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Everything');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    alert(`Searching for ${searchQuery} in category ${selectedCategory}`);
  };

  return (
    <div className="search-container">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          {selectedCategory}
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            {['Everything', 'Software Development', 'Web Development', 'Data Analyst', 'IT Consultant', 'Network Administrator'].map((category) => (
              <a key={category} onClick={() => handleCategorySelect(category)}>
                {category}
              </a>
            ))}
          </div>
        )}
      </div>
      <input 
        type="text" 
        placeholder="Search anything" 
        className="search-input" 
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button className="search-button" onClick={handleSearchButtonClick}>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchInterface;
