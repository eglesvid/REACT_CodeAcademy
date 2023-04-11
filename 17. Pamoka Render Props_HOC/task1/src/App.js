import "./App.css";
import Counter1 from "./components/Counter1/Counter1";
import Counter2 from "./components/Counter2/Counter2";
import CountWrapper from "./components/CountWrapper/CountWrapper";

function App() {
  return (
    <div>
      <CountWrapper
        render={(count, increment) => {
          return <Counter1 count={count} increment={increment} />;
        }}
      />
      <CountWrapper
        render={(count, increment) => {
          return <Counter2 count={count} increment={increment} />;
        }}
      />
    </div>
  );
}

export default App;
