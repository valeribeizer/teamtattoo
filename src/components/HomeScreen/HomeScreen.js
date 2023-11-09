import React from "react";
import NavBar from "./NavBar";
import './style.css';

const HomeScreen = () => {
    return (
        <div id="home" className="homeScreenContainer">
          <NavBar />
          <div className="j">
            <div className="titleContainer">
              <h1>TATTOO TEAM</h1>
              <h6>
                A perfect place for anyone looking for an amazing tattoo
                experience!
              </h6>
              <button>free consultation</button>
            </div>
            <img src="home_screen_photo.png" alt="main_photo" style={{ height: "95%" }} />
          </div>
        </div>
    );
};

export default HomeScreen;