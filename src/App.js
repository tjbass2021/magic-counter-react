import './App.css';
import { useState } from 'react';
import Tela from './components/Tela/Tela';
import ManaCounter from './components/ManaCounter/ManaCounter';

function App() {
    const [condition, setCondition] = useState(true);
    const modifierCondition = () => {
       if(condition) {
            return setCondition(false);
        } else {
            return setCondition(true);
        }
    }
  return (
    <div className="App">
        <h1>Counter MTG</h1>

        {condition === true ? (
            <div>
                <Tela />
                <ManaCounter />
            </div>
        ) : (
            <div>
                <div className="rotate">
                    <Tela />
                </div>
                <div>
                    <Tela />
                </div>
            </div>
        )}

        <button onClick={modifierCondition}>Telas</button>
    </div>
  );
}

export default App;
