import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const inputRef = useRef(null);
  const [timerValue, setTimerValue] = useState(0);

  // Function to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };
  console.log("App component");

  useEffect(() => {
    console.log("use effect");
    const timer = setInterval(() => {
      setTimerValue((prevValue) => prevValue + 0.1);
    }, 2000);

    //cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <progress value={timerValue} />
    </div>
  );
}