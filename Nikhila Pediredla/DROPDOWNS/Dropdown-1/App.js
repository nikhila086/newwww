import React, { useState } from "react";
import "./Dropdown.css"; // Import the CSS file

// Define the Dropdown component
const Dropdown = () => {
  // Create a state variable 'isOpen' to manage the dropdown's visibility
  // 'setIsOpen' is a function to update 'isOpen'
  const [isOpen, setIsOpen] = useState(false);

  // JSX to render the dropdown
  return (
    // Container div with class 'dropdown-container'
    <div className="dropdown-container">
      <h3>Dropdown Menu</h3> {/* Heading */}
      {/* Button to toggle the dropdown visibility */}
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)} // Toggle 'isOpen' when button is clicked
      >
        {/* Change button text based on 'isOpen' state */}
        {isOpen ? "Close Dropdown" : "Open Dropdown"}
      </button>
      {/* Render the select dropdown if 'isOpen' is true */}
      {isOpen && (
        <select className="dropdown-select">
          <option value="option1">Option 1</option> {/* Dropdown option */}
          <option value="option2">Option 2</option> {/* Dropdown option */}
          <option value="option3">Option 3</option> {/* Dropdown option */}
        </select>
      )}
    </div>
  );
};

export default Dropdown; // Export the Dropdown component for use in other files
