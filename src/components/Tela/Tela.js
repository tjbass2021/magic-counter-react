import { useState } from 'react';

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
        <div>
            <div className="buttons">
                <button id="add" onClick={add}>+1</button>
                <button id="sub" onClick={sub}>-1</button>
            </div>
            <div id="visor">{visor}</div>
            <div className="buttons">
                <button id="add5" onClick={add5}>+5</button>
                <button id="sub5" onClick={sub5}>-5</button>
            </div>
        </div>
    );
}

export default Tela;
