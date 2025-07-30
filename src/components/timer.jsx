import React from "react";

const Timer = ( { seconds } ) => {
    const formatTime = (s) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`
    };

    return (
        <div className="timer">
            <h4>Time: {formatTime(seconds)}</h4>
        </div>
    );
};

export default Timer;