import "./App.css";
import ItemList from "./components/ItemList/ItemList";

const foodItems = ["milk", "apple", "kiwi", "butter", "cheese"];

function App() {
  return (
    <div>
      <ItemList items={foodItems} />
    </div>
  );
}

export default App;
