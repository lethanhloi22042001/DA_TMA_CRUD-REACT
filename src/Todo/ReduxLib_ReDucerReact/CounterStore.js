// CounterStore.js
import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log('count',state.count);
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export function useCounterStore() {
  return useReducer(counterReducer, initialState);
}
