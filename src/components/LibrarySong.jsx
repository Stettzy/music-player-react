import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    const setSongHandler = () => {
        const selectedSong = songs.filter((state) => state.id === currentSong.id);
        setCurrentSong(selectedSong[0]);
        // Add Active state
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return { ...song, active: true }
            } else {
                return {...song, active: false}
            }
        });

        setSongs(newSongs);

        playAudio(isPlaying, audioRef);
    }
    
    return (
        <div className={`library-song ${currentSong.active ? 'selected' : ''}`} onClick={setSongHandler} key={currentSong.id}>
            <img src={currentSong.cover} alt="song-img" />
            <div className="song-info">
                <h4>{currentSong.name}</h4>
                <p>{currentSong.artist}</p>
            </div>
        </div>
    )
}

export default LibrarySong;