import React from 'react'

function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img className="actualImg" src={props.song.img_src} alt="" />
            </div>
            <div className="song-details">
            <p className="details-title">{props.song.title}</p>
            <p className="details-artist">{props.song.artist}</p>
            </div>
        </div>
    )
}

export default Details
