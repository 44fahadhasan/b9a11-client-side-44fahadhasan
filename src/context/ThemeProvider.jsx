// import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("myLightTheme");

  const currentTheme = localStorage.getItem("theme");

  const toggleTheme = currentTheme === "myLightTheme";

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "myDarkTheme");
      setTheme("myDarkTheme");
      return;
    }

    localStorage.setItem("theme", "myLightTheme");
    setTheme("myLightTheme");
  };

  const themeInfo = {
    handleTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

// ThemeProvider.propTypes = {
//   children: PropTypes.node,
// };
