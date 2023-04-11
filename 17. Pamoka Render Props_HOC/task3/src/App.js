import "./App.css";
import Input from "./components/Input/Input";
import Kelvin from "./components/Kelvin/Kelvin";
import Fahrenheit from "./components/Fahrenheit/Fahrenheit";

function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  );
}

export default App;
