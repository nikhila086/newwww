import React, { useState } from "react";
import "./style.css"; // Import the CSS file for styling

const App = () => {
  // State variables to manage dropdown state and selected item
  const [showMenu, setShowMenu] = useState(false); // Controls dropdown menu visibility
  const [selectedItem, setSelectedItem] = useState(""); // Tracks the currently selected item
  const [filter, setFilter] = useState(""); // Handles text input for filtering

  // List of months to display in the dropdown
  const items = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to toggle dropdown menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle item selection
  const selectItem = (item) => {
    setSelectedItem(item);
    setShowMenu(false); // Hide the dropdown menu after selecting an item
  };

  // Filtered list of items based on user input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Dropdown Menu</h2> {/* Heading above the dropdown */}
      <div className="dropdown">
        {/* Button to toggle dropdown visibility */}
        <button className="toggle" onClick={toggleMenu}>
          {selectedItem || "Select Month"}{" "}
          {/* Display selected item or default text */}
        </button>
        {showMenu && (
          <div className="menu">
            {/* Input field for filtering */}
            <input
              type="text"
              className="search"
              placeholder="Search..."
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
            {/* Display filtered items or show no results message */}
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`item ${selectedItem === item ? "active" : ""}`}
                  onClick={() => selectItem(item)}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
