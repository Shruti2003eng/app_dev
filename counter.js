import React,{useState} from "react";

function Counter() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    const reset=()=>{
      setCount(0);
    }

  return (
    <div class="counter">
    <div className="App" class="counter-container">
        <h1>Counter App</h1>
        <p>Count:{count}</p>
        <button onClick={decrement} class="counter-btn">Decrement</button>
        <button onClick={increment} class="counter-btn">Increment</button><br   />
        <button onClick={reset} class="reset-btn">Reset</button>

      
    </div>
    </div>
  );
}

export default Counter;