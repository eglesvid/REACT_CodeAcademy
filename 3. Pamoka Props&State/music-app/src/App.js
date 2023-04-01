// Create a simple music app that displays a list of songs. The app should have two components:
// 1. A Song component that displays information about a single song. This component should receive a song prop that is an object representing the song. The object should have the following properties: title, artist, and duration.
// 2. A SongList component that displays a list of Song components. This component should receive a songs prop that is an array of song objects.

import "./App.css";
import SongList from "./components/SongList/SongList";

function App() {
  return (
    <div>
      <SongList />
    </div>
  );
}

export default App;
