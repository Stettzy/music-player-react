import './style/app.scss';
import { useState, useRef } from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
import Nav from './components/Nav';
import data from "./data";


function App() {
  // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    // Ref
    const audioRef = useRef(null);

    // Conver seconds to minutes
    const timeToMinutes = (time) => {
        return (
            Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // Update current song time
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        
        // Convert to percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animationPercentage = Math.round((roundedCurrent / roundedDuration * 100));

        setSongInfo({ ...songInfo, currentTime: current, duration: duration, animationPercentage: animationPercentage});
    }

    return (
        <div className="App">
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song
            currentSong={currentSong}
            isPlaying={isPlaying}
            />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                timeToMinutes={timeToMinutes} 
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
            />
            <audio
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}></audio>
        </div>
    );
}

export default App;
