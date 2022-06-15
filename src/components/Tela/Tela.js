import { useState } from 'react';

// style

import './Style.css';

const Tela = () => {
    let [visor, setVisor] = useState(20);
    const add = () => {
        return setVisor(++visor);
    };
    const sub = () => {
        if(visor <= 0){
            return setVisor(0);
        }else{
            return setVisor(--visor);
        }
    };
    const add5 = () => {
        return setVisor(visor += 5);
    };
    const sub5 = () => {
        if(visor <=0){
            return setVisor(0);
        }else{
            return setVisor(visor -= 5);
        };
    }
    return(
        <div id="container">
            <div className="buttons">
                <button id="add" onClick={add}><p>+1</p></button>
                <button id="sub" onClick={sub}><p>-1</p></button>
            </div>
            <div id="visor"><p>{visor}</p></div>
            <div className="buttons">
                <button id="add5" onClick={add5}><p>+5</p></button>
                <button id="sub5" onClick={sub5}><p>-5</p></button>
            </div>
        </div>
    );
}

export default Tela;
