import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  
  
  return (
    <div className="Home">
      <main>
        <header className="version-1">
          <nav>
            <ul>
              <li>
                <a href="play">
                  <i className="far fa-chart-bar" />
                  Music Player
                </a>
              </li>
              <li>
              <a href="#about">
                  <i className="far fa-envelope-open" />
                  About
                </a>
              </li>
              <li>
              <a href="#copyright">
                  <i className="far fa-edit" />
                  Contact Us
                </a>
              </li>
              
            </ul>
          </nav>
          <a className="play" href="login">
            <i className="far fa-user" onClick="setLogout" />
            Login
          </a>
        </header>
      </main>
      <div className="content">
        <div className="slogan">
          <h1>Listening to music made easy</h1>
          <p>
            <em> "With a great music player, comes great music!" </em> -
            SpiderMusicMan
          </p>
        </div>
        <div className="imgDiv">
          <img
            className="home-logo"
            src="https://media.discordapp.net/attachments/888260726819536946/911633142530584616/Musicarum-logos_white.png?width=586&height=586"
            alt="logo"
          ></img>
        </div>
      </div><a href="#about" id="about" ></a>
      <div className="more">
        
        <h2 className="help">Using the Music PLayer</h2>
        
        <div className="row">
          <div className="column">
            <img
              src="https://media.discordapp.net/attachments/792985133455900682/912336359434366986/unknown.png"
              alt=""
            />
            <img
              src="https://cdn.discordapp.com/attachments/792985133455900682/912337088974843904/unknown.png"
              alt=""
            />
          </div>
          <div className="column">
            <img
              src="https://cdn.discordapp.com/attachments/792985133455900682/912339647345086494/unknown.png"
              alt=""
            />
            <img
              src="https://cdn.discordapp.com/attachments/792985133455900682/912340016687120414/unknown.png"
              alt=""
            />
          </div>
         
          </div>
        </div>
    

      </div>
      
    
  );
}

export default Home;