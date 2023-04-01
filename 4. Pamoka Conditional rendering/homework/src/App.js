// Task: Build a React component that renders a message based on the user's age.
// If the user's age is less than 18, the message should be "You are not old enough to view this content".
// If the user's age is 18 or older, the message should be "Welcome to our website, have fun ;)!”.
//
// Instructions:
// 1. Create a new React component called "AgeMessage".
// 2. Add a state property called "age" to the component.
// 3. Add an input field that allows the user to input their age.
// 4. Add a submit button which changes age state to input fields value
// 5. Use conditional rendering to display the appropriate message based on the user's age.
// 6. Style the component with CSS to make it visually appealing.

import "./App.css";
import AgeMessage from "./components/AgeMessage/AgeMessage";

function App() {
  return (
    <div>
      <AgeMessage />
    </div>
  );
}

export default App;
