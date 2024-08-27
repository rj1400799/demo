/**
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * const ref = useRef(initialValue)
 * 
 * 
 * Basic example of useRef
 */

import "./styles.css";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  // Function to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input field with the ref attached */}
      <input ref={inputRef} type="text" />

      {/* Button to trigger focusing on the input field */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}