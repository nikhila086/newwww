import React from "react";
import styled from "styled-components";
import "./styles.css";

// Define a theme object with colors for different button states
const theme = {
  green: {
    default: "#729762", // Default state color
    hover: "#597445", // Hover state color
    focus: "#486030", // Focus state color
    disabled: "#B7B597", // Disabled state color
    active: "#375122", // Active state color
  },
};

// Create a styled button component with styles for different states
const Button = styled.button`
  /* Apply default background color from theme */
  background-color: ${(props) => theme[props.theme].default};
  /* Set text color to white */
  color: white;
  /* Set padding inside the button */
  padding: 5px 15px;
  /* Round the button corners */
  border-radius: 5px;
  /* Remove default outline */
  outline: 0;
  /* Remove default border */
  border: 0;
  /* Uppercase the button text */
  text-transform: uppercase;
  /* Add margin around the button */
  margin: 10px 0px;
  /* Change cursor to pointer on hover */
  cursor: pointer;
  /* Add box shadow for a slight elevation effect */
  box-shadow: 0px 2px 2px lightgray;
  /* Smooth transition for background color changes */
  transition: ease background-color 250ms;

  /* Change background color on hover */
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  /* Change background color on focus */
  &:focus {
    background-color: ${(props) => theme[props.theme].focus};
  }

  /* Change background color when disabled and alter cursor */
  &:disabled {
    background-color: ${(props) => theme[props.theme].disabled};
    cursor: not-allowed;
    opacity: 0.7; // Reduce opacity for disabled state
  }

  /* Change background color when active */
  &:active {
    background-color: ${(props) => theme[props.theme].active};
  }
`;

// Set the default theme for the button to 'green'
Button.defaultProps = {
  theme: "green",
};

// Function to handle button click event
function clickMe() {
  alert("You clicked me!"); // Show an alert message on button click
}

// Main App component
export default function App() {
  return (
    <div className="container">
      {" "}
      {/* Container to center content */}
      <h1>Styled Buttons</h1> {/* Heading */}
      {/* Render the button in default state */}
      <Button onClick={clickMe}>Default</Button>
      {/* Render the button to demonstrate hover state */}
      <Button onClick={clickMe}>Hover</Button>
      {/* Render the button in disabled state */}
      <Button onClick={clickMe} disabled>
        Disabled
      </Button>
      {/* Render the button to demonstrate active state */}
      <Button onClick={clickMe} onMouseDown={() => {}} onMouseUp={() => {}}>
        Active
      </Button>
      {/* Render the button to demonstrate focus state */}
      <Button onClick={clickMe} onFocus={() => {}} onBlur={() => {}}>
        Focus
      </Button>
    </div>
  );
}
