import React, { useState, useEffect } from "react";

const HighScore = ( { currentScore, isGameWon } ) => {

    const [bestScore, setBestScore] = useState(() => {
        const stored = localStorage.getItem("highScore");
        return stored ? parseInt(stored) : null;
    });


    useEffect(() => {
        if (isGameWon && (bestScore === null || currentScore < bestScore)) {
            setBestScore(currentScore);
            localStorage.setItem("highScore", currentScore);
        };
    }, [isGameWon, currentScore]);

    
    return (
        <div className="highScore">
            <h2>Best Rolls: {bestScore !== null ? bestScore : "-"}</h2>
        </div>
    );
};

export default HighScore;