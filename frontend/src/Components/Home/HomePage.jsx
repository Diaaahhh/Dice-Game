import React from "react";
// import { Link } from "react-router-dom";
import "../Home/HomePage.css";
import "../../App.css";
import homedice from "../../assets/homedice.png";
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left_col">
          <img src={homedice} alt="dices" />
        </div>
        <div className="right_col">
          <div className="right_content">
            <div className="title">DICE GAME</div>
            <div className="play_btn">
              <button>
                <a href="/playground">Play Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
