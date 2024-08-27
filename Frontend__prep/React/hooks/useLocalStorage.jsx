import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const storedData = localStorage.getItem(key);

  const currentValue = storedData ? storedData : initialValue;

  const [data, setData] = useState(currentValue);

  useEffect(() => {
    localStorage.setItem(key, data);
  }, [key, data]);

  return [data, setData];
}


// export default function App() {
//   const [data, setData] = useLocalStorage("mode", "light");
//   const [theme, setTheme] = useState(data);
//   console.log(theme);

//   const handleThemeToggle = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     setData(newTheme);
//   };

//   return (
//     <>
//       <div className={theme}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//       <button onClick={handleThemeToggle}> Toggle Theme </button>
//     </>
//   );
// }

// body {
// }

// .light {
//   font-family: sans-serif;
//   text-align: center;
// }

// .dark {
//   font-family: sans-serif;
//   text-align: center;
//   color: white;
//   background-color: black;
// }