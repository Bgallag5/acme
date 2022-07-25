import React, { useState } from "react";
import { Provider } from "react";
import "../styles/style.css";

export const AppContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, toggleDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState("");
  
  
  const globalContext = {
    darkMode,
    toggleDarkMode,
    selectedArticle,
    setSelectedArticle
  }


  return (
    <AppContext.Provider value={globalContext}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
