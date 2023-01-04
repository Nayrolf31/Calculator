import { useState } from 'react';

// import { evaluate } from 'mathjs';
import * as math from "mathjs";

import './styles/App.css';
import Button from "./components/Button";
import Screen from "./components/Screen";

const App = () => {

const [text, setText] = useState("")
const [result, setResult] = useState("")

const addToText = (val) => {
  setText((text) => [...text,val])
};

  const calculateResult = () => {
    const screen = text.join("")

    setResult(math.evaluate(screen))
  }

  const clearScreen = () => {
    setText ("");
    setResult ("");
  }

  const buttonColor =  "#f2a33c";
  const clearColor  = "red"
  const equalColor  = "rgb(82, 156, 82)"

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <div>
          <Screen text={text} result={result}/>
        </div>
        <div className='row'>
        <Button symbol="7" handleClick={addToText} />
        <Button symbol="8" handleClick={addToText} />
        <Button symbol="9" handleClick={addToText} />
        <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className='row'>
        <Button symbol="4" handleClick={addToText} />
        <Button symbol="5" handleClick={addToText} />
        <Button symbol="6" handleClick={addToText} />
        <Button symbol="*" color={buttonColor}  handleClick={addToText} />
        </div>
        <div className='row'>
        <Button symbol="1" handleClick={addToText} />
        <Button symbol="2" handleClick={addToText} />
        <Button symbol="3" handleClick={addToText} />
        <Button symbol="+" color={buttonColor}  handleClick={addToText} />
        </div>
        <div className='row'>
        <Button symbol="0" handleClick={addToText} />
        <Button symbol="." handleClick={addToText} />
        <Button symbol="Clear" color={clearColor} handleClick={clearScreen} />
        <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="=" handleClick={calculateResult} color={equalColor}/>
        
      </div>
    </div>
  );
}

export default App;
