import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };
  const handleDecrement = () => {
    if (counterValue > 0) {
      setCounterValue((prev) => prev - 1);
    } else {
      window.alert("Can't Decrement 0");
    }
  };
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>Value : {counterValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

/**
 * what happens if you do
 * setCounterValue(counterValue + 1)
 * setCounterValue(counterValue + 1)
 * setCounterValue(counterValue + 1)
 * setCounterValue(counterValue + 1)
 *
 * Will it increment to +4 or just +1,
 * it will batch these state updates and react identifies,
 * these are doing same thing, i.e. to update counterValue to +1,
 * therefore it only does +1
 *
 * But how can you do +4, using 4 setCounterValue() ???
 * you can use setCounterValue(prev => prev +1)
 * setCounterValue(prev => prev +1)
 * setCounterValue(prev => prev +1)
 * setCounterValue(prev => prev +1),
 * here even it is batched, it see's that updation depends on prev value,
 * therefore it does 4 times and does +4 to counterValue.
 */
