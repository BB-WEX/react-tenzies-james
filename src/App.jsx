import { useState } from 'react'
import Dice from './components/dice.jsx'
import "./styles/index.css"


function App() {
    const diceArray = Array.from( { length: 10 } );


    return (
        <div className='diceContainer'>
            {diceArray.map((_, index) => (
                <Dice key={index}/>
            ))}
        </div>
    )
}

export default App
