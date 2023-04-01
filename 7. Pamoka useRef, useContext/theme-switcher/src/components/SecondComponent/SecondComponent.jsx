import React, { useContext } from "react";
import { ThemesContext, DarkModeContext } from "../../App";

export default function SecondComponent() {
  const themes = useContext(ThemesContext);
  const isDarkMode = useContext(DarkModeContext); //3. step: komponentuose, kuriuose reikia tos value, panaudoti context

  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <p style={styles}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque a porro consectetur
      deleniti voluptas repellat repudiandae voluptates et? Maxime consequuntur expedita, itaque
      alias hic in dolores debitis quaerat incidunt.
    </p>
  );
}
