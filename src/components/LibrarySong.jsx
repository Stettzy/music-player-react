import React from "react";

const LibrarySong = ({currentSong}) => {
    return (
        <div className="library-song">
            <img src={currentSong.cover} alt="song-img" />
            <div className="song-info">
                <h4>{currentSong.name}</h4>
                <p>{currentSong.artist}</p>
            </div>
        </div>
    )
}

export default LibrarySong;