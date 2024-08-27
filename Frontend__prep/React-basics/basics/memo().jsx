// React.memo() is a higher-order component provided by React that is used for optimizing the performance 
// of functional components by memoizing them. When you wrap a component with React.memo(), 
// React will only re-render the component if its props have changed. 
// If the props are the same, React will reuse the previously rendered result, 
// thus avoiding unnecessary re-renders.

// Here's an example to illustrate its usage:

import React from 'react';

// Functional component
const MyComponent = ({ name }) => {
  console.log('Rendering MyComponent');
  return <div>Hello, {name}!</div>;
};

// Wrapping MyComponent with React.memo()
const MemoizedComponent = React.memo(MyComponent);

// Parent component
const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment Count</button>
      {/* Passing a prop to MemoizedComponent */}
      <MemoizedComponent name={`User ${count}`} />
    </div>
  );
};

export default ParentComponent;
// In this example:

// MyComponent is a functional component that simply renders a greeting message with a name passed as a prop.
// React.memo(MyComponent) creates a new memoized version of MyComponent.
// ParentComponent contains a button that, when clicked, increments the count state. The count state is passed as a prop to MemoizedComponent.
// Since MemoizedComponent is memoized, it will only re-render when the name prop changes, not when the parent re-renders due to state changes unrelated to name.
// By using React.memo(), you can optimize your application's performance by avoiding unnecessary re-renders of functional components when their props haven't changed.