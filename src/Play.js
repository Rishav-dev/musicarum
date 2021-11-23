import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import './Play.css'
function Play() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    { 
      title: "The Nights",
      artist: "Avicii",
      img_src: "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
      src: "https://cdn.discordapp.com/attachments/770903685429198848/911998515100655627/Avicii_-_The_Nights.mp3"
      },  
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      img_src: "https://i.scdn.co/image/ab67616d0000b2739da665cad95ad0588122353b",
      src: "https://cdn.discordapp.com/attachments/758163171725934632/912541247799971880/The_Weekend_-_Blinding_Lights-LekkiLoaded.com.mp3"
    },
    {
      title: "Somebody New",
      artist: "Hozier",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    },{
      title: "Shape of You",
      artist: "Ed Sheeran",
      img_src: "https://a10.gaanacdn.com/gn_img/albums/0wrb4qNKLg/wrb4dDxLbL/size_xxl.webp",
      src: "https://cdn.discordapp.com/attachments/758163171725934632/912542221012709436/Shape_of_You_-_Ed_Sheeran-_MyMp3Bhojpuri.In.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="Play">
      <form action="/home">
      <button  id="back" type="submit">Go back</button>
      </form>
      <div className="holder2">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
      </div>
    </div>
  );
}

export default Play;
