import React, { useState } from "react";
import "./Playground.css";
import "../../App.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";

const Playground = () => {
  const [showRules, setShowRules] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const handleSelect= (value)=>{
    setSelectedValue(value);
  }
  const handleDice= ()=>{
    let random= Math.floor(Math.random()*6)+1;
    setDiceValue(random);
    console.log(random);
    console.log(diceNumbers[random]);
    handleScore();
  }
  const handleScore= ()=>{
    if (selectedValue===diceValue) {
        console.log("win");
        
    } else {
        console.log("lost");
    }
  }

  const diceNumbers= {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six
  };

  return (
    <div>
      <div className="container">
        <div className="pg_wrapper">
          <div className="header">
            <div className="score">
              <div className="score_marks">0</div>
              <div className="score_footer">Total Score</div>
            </div>
            <div className="numbers">
              <div className="number_wrapper">
                {[1, 2, 3, 4, 5, 6].map((value) => {
                  return (
                    <div className={`cover ${selectedValue===value?"selected":""}`}  key={value}>
                      <div className="dice_plain" onClick={()=>{handleSelect(value)}}>{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="dice_box">
            <div className="dice" onClick={()=>{handleDice()}}>
              <img src={diceNumbers[diceValue]} alt="dice_piece" />
              <p>Click on Dice to Roll</p>
            </div>
            <div className="buttons">
              <button className="white">Reset Score</button>
              <button
                className="black"
                onClick={() => {
                  setShowRules(!showRules);
                }}
              >
                {" "}
                Show Rules
              </button>
            </div>
          </div>
          {showRules && (
            <div className="rules">
              <p>
                <b>How to play Dice Game</b> <br /> <br />
                Select any number <br />
                Click on dice image <br />
                After click on dice if the selected number is equal to dice, you
                will get point as dice <br />
                If you get wrong gues then 2 points will be deducted
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Playground;