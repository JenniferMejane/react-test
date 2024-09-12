import { useState } from "react";


function PracticeState(){
    const [count, setcount] = useState(0);


    function  increment(){
    setcount(count + 1);
} 
function decrement(){
    setcount(count > 0 ? count - 1 : 0)
}


    return(
        <main>
            <h1>practicing state in reactjs</h1>
<br/>
<br/>
<br/>
<br/>

<h1>count: {count}</h1>
<br />
<br />
<br />
<br />

<button onClick={increment}>Increment</button>
<button onClick={decrement}>decrement</button>
<br />
<br />

<br />

<br />



        </main>
    );
}

export default PracticeState;