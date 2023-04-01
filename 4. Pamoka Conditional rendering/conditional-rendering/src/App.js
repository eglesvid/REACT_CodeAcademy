import "./App.css";
import { posts } from "./data/posts.js"; //kai nedarom default export, tada reik {}
import Hero from "./components/Hero/Hero";
import Post from "./components/Post/Post";
// import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="container">
      {/* <Greeting isLoggedIn={true} /> */}
      <Hero />
      <div className="flex-container">
        {posts.map((post) => {
          return <Post img={post.url} text={post.text} />;
        })}
      </div>
    </div>
  );
}

export default App;
