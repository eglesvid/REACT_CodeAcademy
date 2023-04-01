import "./App.css";
import FuncDiv from "./components/FuncDiv/FuncDiv.jsx";
import ClassDiv from "./components/ClassDiv/ClassDiv.jsx";

function App() {
  return (
    <div>
      <FuncDiv tekstas="Cia yra tekstas perduotas per propsus" />
      <ClassDiv tekstas="Cia yra tekstas perduotas per propsus" />
    </div>
  );
}

export default App;
