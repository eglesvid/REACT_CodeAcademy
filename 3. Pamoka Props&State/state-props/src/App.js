import "./App.css";
import Products from "./components/Products/Products";
// import Button from "./components/MathButton/MathButton.jsx"; uzduotis1

function App() {
  return (
    <div>
      <Products />
      {/* uzduotis1 <Button
        text="Show 5 + 6 answer"
        action={(a, b) => a + b}
        array={[5, 6]}
        // person={{
        //   name: "Marius",
        //   age: 26,
        // }}
        // header={() => console.log("as")}
      />
      <Button
        text="Show 10 - 6 answer"
        action={(a, b) => a - b}
        array={[10, 6]}
      /> */}
    </div>
  );
}

export default App;
