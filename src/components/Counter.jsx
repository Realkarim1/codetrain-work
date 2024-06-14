import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let decrement = () => {
    setCount(count -= 1);
  };
let reset =()=>{
        setCount(0);
  };
  let increment = () => {
    setCount(count+=1);
  };
 

  return (
    <div className="container">
      <p className="count-display">{count}</p>

      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
      <button className="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
export default Counter;
