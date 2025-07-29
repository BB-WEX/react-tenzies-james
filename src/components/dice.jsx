import { useState } from "react";
import "../styles/dice.css"

const Dice = ( { value, isHeld, onClick } ) => {
    
    return (
        <div>
            <button
                onClick={onClick}
                disabled={isHeld}
                className={isHeld ? "btn held" : "btn"}
            >
                {value}
            </button>
        </div>
    )

}

export default Dice;