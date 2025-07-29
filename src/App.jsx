import { useState } from 'react'
import DiceBoard from './components/diceBoard.jsx'
import "./styles/index.css"
import Text from './components/text.jsx'


function App() {
    const [showDice, setShowDice] = useState(false)

    const handleShow = () => {
        setShowDice(true);
    };

    return (
        <div className='content'>
            {!showDice ? (
                <button onClick={handleShow}>Start Game</button>
            ) : (
                <>
                    <Text />
                    <DiceBoard />
                </>
            )}
        </div>
    );
}

export default App;
