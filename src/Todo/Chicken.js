import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Giá trị ban đầu là 0

  const increment = () => {
    setCount(count + 1); // Tăng giá trị count lên 1
  };

  const decrement = () => {
    setCount(count - 1); // Giảm giá trị count đi 1
  };

  return { count, increment, decrement };
}

export default function Chicken() {
  const { count, increment, decrement } = Counter(1,2,23,2,3123,12);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
