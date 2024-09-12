import { useState } from 'react';
import './App.css';

function App() {
const [input, setInputValue ] = useState('');
//const [isopen, setisopen] = useState(false);


function getvalue(value){
  setInputValue((prevValue) => {
    return prevValue + value;
  });
 
}

const handleEqualClick = () => {
  try {
    const result = safeEval(input.replace(/x/g, '*'));
    setInputValue(result.toString());
  } catch (error) {
    setInputValue('Error');
  }
};
   const handleClear = () => {
  setInputValue('');
};

// Simple expression evaluator

const safeEval = (expr) => {
  // Replace power and multiplication symbols
  const sanitizedExpr = expr
    .replace(/--/g, '+') // Handle double negatives
    .replace(/(\d+)([+\-*/])(\d+)/g, (match, num1, operator, num2) => {
      switch (operator) {
        case '+': return Number(num1) + Number(num2);
        case '-': return Number(num1) - Number(num2);
        case '*': return Number(num1) * Number(num2);
        case '/': return Number(num1) / Number(num2);
        default: return match;
      }
    });
    
      return eval(sanitizedExpr);
    
  }
 return (
<div>
<article className="calculator">
<div className="text">
    <input
    id = 'myinput'
    type="text"
    value = {input}
      onChange={(e) => {
        setInputValue(e.target.value);
      }} 
     placeholder="0" 
     maxLength="15" 
     autofocus/>

</div>
<div className="button">
    
        <button className = "functions">sin</button>
        <button className = "functions">cos</button>
        <button className = "functions">tan</button>
        <button className= "functions">on/off</button>
        
        <button className= "functions">AC</button>
        <button className = "functions">%</button>
        <button className = "functions">DEL</button>
        <button onClick={() => getvalue('/')} className = "functions">/</button>
        <button onClick={() => getvalue(9)}>9</button>
        <button onClick={() => getvalue(8)}>8</button>
        <button onClick={() => getvalue(7)}>7</button>
        <button onClick={() => getvalue('*')} className = "functions">x</button>
       
        <button onClick={() => getvalue(6)}>6</button>
        <button onClick={() => getvalue(5)}>5</button>
        <button onClick={() => getvalue(4)}>4</button>
       
        <button onClick={() => getvalue('-')} className = "functions">-</button>
       
        <button onClick={() => getvalue(3)}>3</button>
        <button onClick={() => getvalue(2)}>2</button>
        <button onClick={() => getvalue(1)}>1</button>
        <button onClick={() => getvalue('+')} className = "functions">+</button>
       
        <button onClick={() => getvalue(0)}>0</button>
       
        <button onClick={() => getvalue('.')}>.</button>
        <button onClick={handleEqualClick} className="equal">=</button>
    
</div>
</article>
</div>
  );

}
export default App;
