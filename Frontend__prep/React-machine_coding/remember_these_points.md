**1. Try out all type of state variable and how you can mutate the state variable for ex object, map**

```javascript
In React, you can indeed use a JavaScript Map object as a state variable, but you need to be cautious about how you use it due to React's state immutability principles.

Here's a basic example of how you can use a Map object as a state variable in a React component:

import React, { useState } from 'react';

const MyComponent = () => {
  const [mapState, setMapState] = useState(new Map());

  // Function to update the map state
  const updateMapState = () => {
    const newMap = new Map(mapState);
    newMap.set('key', 'value');
    setMapState(newMap);
  };

  return (
    <div>
      <button onClick={updateMapState}>Update Map State</button>
      <div>
        {Array.from(mapState).map(([key, value]) => (
          <div key={key}>
            Key: {key}, Value: {value}
          </div>
        ))}
      </div>
    </div>
  );
};
```

**2. Try out object**
**3. Try out array**
