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
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(0);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setFlag(1);
  };

  const handleDice = () => {
    let result;
    let random = Math.floor(Math.random() * 6) + 1;
    setDiceValue(random);
    if (selectedValue === random) {
      result = score + random;
    } else {
      result = score - 2;
    }

    if (result <= 0) {
      setScore(0);
    } else {
      setScore(result);
    }
    setFlag(0);
  };
  const handleReset = () => {
    setScore(0);
    setDiceValue(1);
    setFlag(0);
    setSelectedValue(null);
  };

  const diceNumbers = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
  };

  return (
    <div>
      <div className="container">
        <div className="pg_wrapper">
          <div className="header">
            <div className="score">
              <div className="score_marks">{score}</div>
              <div className="score_footer">Total Score</div>
            </div>
            <div className="numbers">
              <div className="number_wrapper">
                {[1, 2, 3, 4, 5, 6].map((value) => {
                  return (
                    <div
                      className={`cover ${selectedValue === value ? "selected" : ""}`}
                      key={value}
                    >
                      <div
                        className="dice_plain"
                        disabled={flag != 0}
                        onClick={() => {
                          handleSelect(value);
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="dice_box">
            <div
              className="dice"
              onClick={
                flag === 1
                  ? () => {
                      handleDice();
                    }
                  : undefined
              }
            >
              <img src={diceNumbers[diceValue]} alt="dice_piece" />
              <p>Click on Dice to Roll</p>
            </div>
            <div className="buttons">
              <button
                className="white"
                onClick={() => {
                  handleReset();
                }}
              >
                Reset Score
              </button>
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
