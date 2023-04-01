import React, { useContext } from "react";
import { ThemesContext, DarkModeContext } from "../../App";
import SecondComponent from "../SecondComponent/SecondComponent";

export default function FirstComponent() {
  const themes = useContext(ThemesContext); //dabar themes yra visos reikalingos, pasiduotos spalvos
  const isDarkMode = useContext(DarkModeContext);

  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <div style={styles}>
      <h1>Hello</h1>
      <SecondComponent />
    </div>
  );
}
