1. state update is immutable in react, next change the state variable directly, for ex: use this way instead
setTheme(preTheme => prevTheme === 'light' ? 'dark' : 'light').

2. if it's says some hook/function is not a function, it could be related to import/export issue.

3. 