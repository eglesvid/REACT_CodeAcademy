import React, { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemesContext = React.createContext(); //1. step: context - reiksmes, kurias norim zemyn pasiduot elementams
export const DarkModeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onClickHandler() {
    setIsDarkMode((prev) => !prev); //funckija gali priimti viena parametra - ankstesne reiksme. Principas, kad uzdetu atvirkstine reiksme, toks kaip toggle. Kad nereiktu padavineti ir pacios reiksmes, ir funkcijos, galim toki buda naudoti. Arba kitas variantas: setIsDarkMode(!isDarkMode);
  }

  return (
    <div>
      <DarkModeContext.Provider value={isDarkMode}>
        <ThemesContext.Provider value={themes}>
          <FirstComponent />
          <SecondComponent />
          <button onClick={onClickHandler}>Change Theme</button>
        </ThemesContext.Provider>
      </DarkModeContext.Provider>
    </div> //2. step: susikurti Provider ir juo apskliausti reikiamus komponentus, kurie norim, kad gautu ta value. Principe, jeigu pasiduodam DarkMode per context, nebereik jo padavineti kaip props
  );
}

export default App;
