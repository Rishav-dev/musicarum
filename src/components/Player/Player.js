import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player">
            <div className="topBar">
            <ExpandMoreIcon />
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <span>Now Playing</span>
            <MoreHorizIcon />
            </div>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <div className="nextSong">
            <p>Next up: </p>  <span className="songnext">{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span>
            </div>
        </div>
    )
}

export default Player;
