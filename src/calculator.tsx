import React, { useState } from "react";
import './style.css';



export function Calculator(){
    //
    const[display, setDisplay] = useState("");
    const[history, setHistory] = useState<string[]>([]);

    function handleClick(value: string){
        if (value === "CE") {
            setDisplay("");
            setHistory([]);
          } else if (value === "=") {
            let result = eval(display);
            setDisplay(result);
            setHistory([...history, result]);
          } else {
            setDisplay(display + value);
          }
    }

    return <>
        <body>
        <div className="calculator">
                <div className="display">{display}</div>
                <br/>
                <div className="buttons">
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button id="operand" onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button id="operand" onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button id="operand" onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button id="operand" onClick={() => handleClick('.')}>.</button>
                    <button id="operand" onClick={() => handleClick('/')}>/</button>
                    <button id="equals" onClick={() => handleClick('=')}>=</button>
                </div>
                <br/>
            <button id="clear" onClick={() => handleClick('CE')}>CE</button>
        </div>

        <div className = 'history'>
            History:
            <br/>
            {history.map((num, index) => (<div key={index}>{num}</div>))}
            <br/>
        </div>
        </body>
    </>

}