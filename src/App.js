import './App.css';
import { useState } from 'react';
import Tela from './components/Tela/Tela';

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
        <button id="button" onClick={modifierCondition}>Players Number</button>

        {condition === true ? (
            <div>
                <Tela />
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

    </div>
  );
}

export default App;
