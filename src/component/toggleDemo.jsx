import React, { useState } from 'react';

function ThemeToggle() {
  // State to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;