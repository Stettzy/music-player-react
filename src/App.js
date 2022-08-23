import './style/app.scss';
import { useState } from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
