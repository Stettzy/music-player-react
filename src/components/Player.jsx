import {React, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // Ref
    const audioRef = useRef(null);

    // Play/Stop Handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    // Update current song time
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration: duration});
    }

    // Conver seconds to minutes
    const timeToMinutes = (time) => {
        return (
            Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // Allow slider dragging to modify song current time
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{timeToMinutes(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{timeToMinutes(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="prev" icon={faAngleLeft} /> 
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} /> 
                <FontAwesomeIcon className="next" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}

export default Player;