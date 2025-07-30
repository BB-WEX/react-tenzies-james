import React, { useState, useEffect, useRef } from "react";
import Dice from "./dice";
import RollButton from "./rerollButton";
import Counter from "./Counter";
import Timer from "./timer";
import HighScore from "./highScore";
import BestTime from "./bestTime";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

    
const newDice = () => {
    return Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
    }));
};

const DiceBoard = () => {
    const [diceList, setDiceList] = useState(newDice());
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);
    const [rollCount, setRollCount] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const timeRef = useRef(null);
    const [width, height] = useWindowSize();
    

    useEffect(() => {
        startTimer();
        return () => clearInterval(timeRef.current);
    }, []);

    useEffect(() => {
        if (hasWon || hasLost) {
            clearInterval(timeRef.current);
        }
    }, [hasWon, hasLost])




    useEffect(() => {
        const allHeld = diceList.every(die => die.isHeld);
        const allSame = diceList.every(die => die.value === diceList[0].value);

        if (allHeld && allSame) {
            setHasWon(true);
        } else if (allHeld && !allSame) {
            setHasLost(true)
        }
    }, [diceList]);

    const startTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };


    const handleDiceClick = (id) => {
        setDiceList((prevDiceList) => 
            prevDiceList.map((die) => 
            die.id === id ? { ...die, isHeld: true} : die
            )
        );
    };

    const rollUnheld = () => {
        setDiceList((prev) => 
            prev.map((die) =>
                die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
            )
        );
        setRollCount(prev => prev + 1);
    };


    const resetGame = () => {
        setDiceList(newDice());
        setHasWon(false);
        setHasLost(false)
        setRollCount(0);
        setSeconds(0);
        startTimer();
    };


    return (
        <div className="diceContainer">
            {hasWon && <Confetti
                            width={width} 
                            height={height} 
                            numberOfPieces={500}
                            recycle={false}
                            gravity={0.8}
                        />}
            <div className="timerAndCounter">
                <Timer seconds={seconds} />
                <Counter count={rollCount} />
            </div>
            <div className="bestScores">
                <HighScore  currentScore={rollCount} isGameWon={hasWon}/>
                <BestTime  currentTime={seconds} isGameWon={hasWon}/>
            </div>
            {hasWon && <h2 className="winMessage">You Won!</h2>}
            {hasLost && <h2 className="winMessage">You Lost! Try Again.</h2>}
            <div className="diceContent">
                {diceList.map((die) => (
                    <Dice
                        key={die.id}
                        value={die.value}
                        isHeld={die.isHeld}
                        onClick={() => handleDiceClick(die.id)}
                    />
                ))}
            </div>

            

            <div className="rollButton">
                {(hasWon || hasLost) ? (
                    <button onClick={resetGame} className="rollBtn">New Game</button>
                ) : (
                    <RollButton onRoll={rollUnheld} />
                )}
            </div>
        </div> 
    );
};
export default DiceBoard;