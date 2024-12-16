import React, { createContext, useState, useEffect } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle between themes
  const toggleTheme = () => { 
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the document root
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#2b2b2b" : "" ;
    document.body.style.color = theme === "dark" ? "#fff" : "" ;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};