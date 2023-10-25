import { useState } from "react";
import SubChildComponent from "./SubChildComponent";

const initialStateValue = 45;

function ChildComponent() {
  const [counter, setCounter] = useState(initialStateValue);
  console.log(counter);

  function increaseCounter(){
    setCounter(counter + 1);
  }

  function decreaseCounter(){
    setCounter(counter - 1);
  }

  function resetCounter(){
    setCounter(0);
  }


  return (
    <div>
      <button onClick={increaseCounter}>Add</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
   <p>Counter value is {counter}</p>
      <SubChildComponent />
    </div>
  );
}

export default ChildComponent;
