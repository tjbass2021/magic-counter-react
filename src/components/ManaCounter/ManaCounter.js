import { useState } from 'react';

// style

import './Style.css';

const ManaCounter = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    const [black, setBlack] = useState(0);
    const [white, setWhite] = useState(0);
    const [nocolor, setNoColor] = useState(0);

    const addMana = (color) => ++color;
    const subMana = (color) => {
        if(color <=0) {
            return color = 0;
        }else{
            return --color;
        }
    }
    return(
        <div id="container-mana">
            <h4>Mana Counter</h4>
            <div id="botoes">

            <div className="botoes">
                <button className="red" onClick={() => setRed(addMana(red))}>{red}</button>

                <button className="red" onClick={() => setRed(subMana(red))}>-</button>
            </div>
            <div className="botoes">
                <button className="blue" onClick={() => setBlue(addMana(blue))}>{blue}</button>

                <button className="blue" onClick={() => setBlue(subMana(blue))}>-</button>
            </div>
            <div className="botoes">
                <button className="green" onClick={() => setGreen(addMana(green))}>{green}</button>

                <button className="green" onClick={() => setGreen(subMana(green))}>-</button>
            </div>
            <div className="botoes">
                <button className="black" onClick={() => setBlack(addMana(black))}>{black}</button>

                <button className="black" onClick={() => setBlack(subMana(black))}>-</button>
            </div>
            <div className="botoes">
                <button className="white" onClick={() => setWhite(addMana(white))}>{white}</button>

                <button className="white" onClick={() => setWhite(subMana(white))}>-</button>
            </div>
            <div className="botoes">
                <button className="nocolor" onClick={() => setNoColor(addMana(nocolor))}>{nocolor}</button>

                <button className="nocolor" onClick={() => setNoColor(subMana(nocolor))}>-</button>
            </div>
            </div>
        </div>
    );
}

export default ManaCounter;
