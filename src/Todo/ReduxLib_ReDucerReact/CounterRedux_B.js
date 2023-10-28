//CounterRedux_B
import React from 'react';
import { useCounterStore } from './CounterStore';

function CounterRedux_B() {
  const [state_B, dispatch] = useCounterStore();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter (useReducer _ B)</h1>
      <p>Count: {state_B.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterRedux_B;
