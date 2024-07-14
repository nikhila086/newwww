import React, { useRef } from "react";
import { styled } from "@mui/material/styles"; // Import styled from MUI for creating styled components
import Button from "@mui/material/Button"; // Import Button component from MUI
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Import CloudUploadIcon from MUI

// Define a styled component for the main container using MUI's styled API
const Container = styled("div")({
  display: "flex", // Use flexbox for layout
  flexDirection: "column", // Arrange items in a column
  alignItems: "center", // Center items horizontally
  justifyContent: "center", // Center items vertically
  minHeight: "100vh", // Ensure the container takes up at least the full viewport height
  padding: "20px", // Padding inside the container
  backgroundColor: "#f0f0f0", // Background color of the container
});

// Define a styled component for the hidden file input using MUI's styled API
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)", // Clip the input to be visually hidden
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// Main component function
export default function App() {
  const fileInputRef = useRef(null); // Reference to the hidden file input element

  // Function to handle button click to trigger file input
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger a click on the hidden file input element
    }
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file); // Log the selected file (replace with actual file handling logic)
      // Add your file handling logic here
    }
  };

  return (
    <Container>
      {/* Heading for the upload button example */}
      <h1 style={{ fontSize: "1.7rem", margin: "0.2em 0" }}>
        Upload Button Example
      </h1>

      {/* Button container */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Button component from MUI */}
        <Button
          variant="contained" // Button variant (contained for filled background)
          startIcon={<CloudUploadIcon />} // Start icon with CloudUploadIcon from MUI
          onClick={handleButtonClick} // Click handler for the button
          sx={{
            // Custom styles using MUI's sx prop
            backgroundColor: "#729762", // Default state background color
            "&:hover": {
              backgroundColor: "#597445", // Hover state background color
            },
            "&:focus": {
              backgroundColor: "#486030", // Focus state background color
            },
            "&:disabled": {
              backgroundColor: "#A9A9A9", // Disabled state background color
              color: "#000000", // Text color for disabled state
            },
            "&:active": {
              backgroundColor: "#375122", // Active state background color
            },
          }}
        >
          Upload File
        </Button>

        {/* Hidden file input for file selection */}
        <VisuallyHiddenInput
          ref={fileInputRef} // Reference to the hidden file input element
          type="file" // Type of input element (file upload)
          onChange={handleFileChange} // Change handler for file selection
        />
      </div>
    </Container>
  );
}
