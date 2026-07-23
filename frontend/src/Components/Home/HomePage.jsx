import React from "react";
import "../Home/HomePage.css";
import "../../App.css";
import homedice from "../../assets/homedice.png";
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
              <button>Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
