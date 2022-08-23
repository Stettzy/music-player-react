import {React, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


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

    return (
        <div className="player-container">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="prev" icon={faAngleLeft} /> 
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} /> 
                <FontAwesomeIcon className="next" icon={faAngleRight} /> 
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}

export default Player;