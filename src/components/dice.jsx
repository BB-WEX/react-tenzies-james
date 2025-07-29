import { useState } from "react";
import "../styles/dice.css"

const Dice = ( {} ) => {
    const [isHeld, setIsHeld] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const value = 1;

    const isHeldHandle = () => {
        setIsHeld(true);
        console.log(isHeld);
        setIsDisabled(true);
        console.log(isDisabled);
    };


    const getVariable = (event) => {
        const chosenNumber = event.target.innerHTML;
        console.log(chosenNumber);
    };
    

    const combineHandles = (event) => {
        getVariable(event)
        isHeldHandle()
    };

    return (
        <div>
            <button onClick={combineHandles} disabled={isDisabled} className={isHeld ? "btn held" : "btn"}>{value}</button>
        </div>
    );
}

export default Dice;