import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };

  return (
    <div style={themeStyle}>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
