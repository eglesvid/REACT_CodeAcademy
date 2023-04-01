import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import AuthHeader from "./components/AuthHeader/AuthHeader";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<AuthHeader />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
