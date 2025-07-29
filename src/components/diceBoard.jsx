import React, { useState } from "react";
import Dice from "./dice";


    
const newDice = () => {
    return Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
    }));
};

const DiceBoard = () => {
    const [diceList, setDiceList] = useState(newDice());

    const handleDiceClick = (id) => {
        setDiceList((prevDiceList) => 
            prevDiceList.map((die) => 
            die.id === id ? { ...die, isHeld: true} : die
            )
        );
    };

    return (
        <div className="diceContainer">
            {diceList.map((die) => (
                <Dice
                    key={die.id}
                    value={die.value}
                    isHeld={die.isHeld}
                    onClick={() => handleDiceClick(die.id)}
                />
            ))}
        </div>
    );
};
export default DiceBoard;