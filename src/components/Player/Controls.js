import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPrevious';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';

function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <SkipPreviousRoundedIcon />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>

                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <SkipNextRoundedIcon />
            </button>
        </div>
    )
}

export default Controls
