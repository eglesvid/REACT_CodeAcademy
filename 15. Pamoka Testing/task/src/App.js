import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Card
        heading={
          "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
        }
        author={"Jeff Atwood"}
      />
    </div>
  );
}

export default App;
