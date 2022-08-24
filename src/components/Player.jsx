import { React, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, timeToMinutes, songs, setCurrentSong, setSongs }) => {
    // Play/Stop Handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    // Allow slider dragging to modify song current time
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = (direction) => {
        const songIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'next') {
            setCurrentSong(songs[(songIndex + 1) % songs.length]);
        }
        
        if (direction === 'prev') {
            if ((songIndex - 1 % songs.length === -1)) {
                setCurrentSong(songs[songs.length - 1]);
                playAudio(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(songIndex - 1) % songs.length]);
        }

        playAudio(isPlaying, audioRef);
    }

    useEffect(() => {
        // Add Active state
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return { ...song, active: true }
            } else {
                return { ...song, active: false }
            }
        });

        setSongs(newSongs);
    }, [currentSong]);

    const animationStyle = {
        transform: `translate(${songInfo.animationPercentage}%)`,
    }

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{timeToMinutes(songInfo.currentTime)}</p>
                <div className="track" style={{ background: `linear-gradient(to right, ${currentSong.colors[0]}, ${currentSong.colors[1]})` }} >
                    <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
                    <div className="animate-track" style={animationStyle}></div>
                </div>
                <p>{songInfo.duration ? timeToMinutes(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="prev" icon={faAngleLeft} onClick={() => skipTrackHandler('prev')} /> 
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} /> 
                <FontAwesomeIcon className="next" icon={faAngleRight} onClick={() => skipTrackHandler('next')}/>
            </div>
        </div>
    );
}

export default Player;