1. State updates in React are immutable, don't try to mutate the state variables directly, instead create a new variable and then assign to state variable. If directly mutated, you won't see it triggering re-rendering.

2. Be cauios when updating state variable using setVariable() method, correct way of incrementing/ modifying using prev Value, do as below
setTimerValue((prevValue) => prevValue + 0.1);