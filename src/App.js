
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Play from './Play'// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoDCWTIPleep5PIA5nenasXd_Q8-TCgo0",
  authDomain: "musicarumplayer.firebaseapp.com",
  projectId: "musicarumplayer",
  storageBucket: "musicarumplayer.appspot.com",
  messagingSenderId: "275678121496",
  appId: "1:275678121496:web:2c0cc095fec868e0833d6d",
  measurementId: "G-DEKDT0SEBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>


      
        <Routes>
          <Route path="/login" element={<Login />} />


          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/" element={<Navigate to ="/home" />}/>


        </Routes>


      
    </BrowserRouter >
    <div class="content-container copyright" id="copyright">
    <span id="contactUs">Contact Us - </span>
      <a href="https://www.instagram.com/spotify/" style={{ paddingRight: "1rem" }}> Instagram </a>
    <a href="http://www.informusic.org/terms--conditions.html" style={{ paddingRight: "1rem" }}>
      Terms of Use
    </a>
    <a href="https://musicformakers.com/privacy/" style={{ paddingRight: "1rem" }}>
      Website Privacy
    </a>
    <a href="https://copyright.gov.in/" style={{ paddingRight: "1rem" }}>
      Copyright
    </a>
    <a
      className="ot-sdk-show-settings"
      style={{ paddingRight: "1rem", cursor: "pointer" }}
    >
      Do Not Sell My Personal Info 
    </a>{" "}
    © 2021 Musicarum, LLC. All rights reserved.
  </div>
    </div >
  );
}

export default App;
