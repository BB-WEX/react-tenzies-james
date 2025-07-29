import React, { useState, useEffect } from "react";
import Dice from "./dice";
import RollButton from "./rerollButton";

    
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

    useEffect(() => {
        const allHeld = diceList.every(die => die.isHeld);
        const allSame = diceList.every(die => die.value === diceList[0].value);

        if (allHeld && allSame) {
            setHasWon(true);
        }
    }, [diceList]);




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
    };


    const resetGame = () => {
        setDiceList(newDice());
        setHasWon(false);
    };


    return (
        <div className="diceContainer">
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

            {hasWon && <h2 className="winMessage">You Won!</h2>}

            <div className="rollButton">
                {hasWon ? (
                    <button onClick={resetGame} className="rollBtn">New Game</button>
                ) : (
                    <RollButton onRoll={rollUnheld} />
                )}
            </div>
        </div> 
    );
};
export default DiceBoard;