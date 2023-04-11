import "./App.css";
import Card from "./components/Card/Card";
import List from "./components/List/List";
import Paragraph from "./components/Paragraph/Paragraph";
import VisibilityToggleWrapper from "./components/VisibilityToggleWrapper/VisibilityToggleWrapper";

const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Dave" },
  { id: 5, name: "Eve" },
];

function App() {
  return (
    <div>
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <Paragraph isVisible={isVisible} toggle={toggle} />;
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return (
            <Card
              isVisible={isVisible}
              toggle={toggle}
              source={
                "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
              }
              header={"This is a header"}
              bodyText={"Some Random Body Text"}
            />
          );
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <List isVisible={isVisible} toggle={toggle} people={people} />;
        }}
      />
    </div> //kaip propsa priima f-ija, kuri grazina kita komponenta
  );
}

export default App;
