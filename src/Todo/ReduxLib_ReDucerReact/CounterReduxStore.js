//CounterReduxStore
// CounterReduxStore.js
import React from 'react';
import { useCounterStore } from './CounterStore';

function CounterReduxStore() {
  const [state, dispatch] = useCounterStore();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter (useReducer)</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterReduxStore;
