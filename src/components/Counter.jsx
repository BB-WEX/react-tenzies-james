import React from "react";

const Counter = ( { count } ) => {
    return (
        <div className="rollCount">
            <h3>Rolls: {count}</h3>
        </div>
    );
};

export default Counter;