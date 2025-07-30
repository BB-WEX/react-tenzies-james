import React, { useState, useEffect } from "react";


const BestTime = ({ currentTime, isGameWon }) => {

    const [bestTime, setBestTime] = useState(() => {
        const stored = localStorage.getItem("bestTime");
        return stored ? parseInt(stored) : null;
    });

    useEffect(() => {
        if (isGameWon && (bestTime === null || currentTime < bestTime)) {
            setBestTime(currentTime);
            localStorage.setItem("bestTime", currentTime);
        }
    }, [isGameWon, currentTime]);


    const formatTime = (s) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="bestTime">
            <h2>Best Time: {bestTime !== null  ? formatTime(bestTime) : "-"}</h2>
        </div>
    );
};

export default BestTime;