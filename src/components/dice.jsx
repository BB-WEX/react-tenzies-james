import { useState } from "react";
import "../styles/dice.css"

const Dice = ( { value, isHeld, onClick, shouldSpin } ) => {
    
    return (
        <div>
            <button
                onClick={onClick}
                disabled={isHeld}
                className={`btn ${isHeld ? "held" : ""} ${shouldSpin ? "spin" : ""}`}
            >
                {value}
            </button>
        </div>
    )

}

export default Dice;