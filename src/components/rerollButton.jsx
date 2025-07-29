import React from "react";

const RollButton = ({ onRoll }) => {
    return (
        <button onClick={onRoll} className="rollBtn">
            Roll
        </button>
    );
};

export default RollButton