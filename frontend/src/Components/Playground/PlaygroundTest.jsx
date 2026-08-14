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
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [error, setError] = useState("");

  const diceImages = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setError("");
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(prevScore => prevScore + randomNumber);
    } else {
      setScore(prevScore => Math.max(0, prevScore - 2));
    }

    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setCurrentDice(1);
    setError("");
  };

  const toggleRules = () => {
    setShowRules(!showRules);
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
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <div
                    key={number}
                    className={`cover ${selectedNumber === number ? "selected" : ""}`}
                    onClick={() => handleNumberSelect(number)}
                  >
                    <div className={`dice_plain ${getNumberText(number)}`}>
                      {number}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="dice_box">
            <div className="dice" onClick={rollDice}>
              <img src={diceImages[currentDice]} alt="dice_piece" />
              <p>Click on Dice to Roll</p>
            </div>
            {error && <div className="error_message">{error}</div>}
            <div className="buttons">
              <button className="white" onClick={resetScore}>Reset Score</button>
              <button className="black" onClick={toggleRules}>
                {showRules ? "Hide Rules" : "Show Rules"}
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
                If you get wrong guess then 2 points will be deducted
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get number class name
const getNumberText = (number) => {
  const numberMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  };
  return numberMap[number];
};

export default Playground;