import React, { useReducer } from 'react';
import { getOneUser } from '../../Redux/actions';


const initialState = {
  count: 0,
  user : []
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'GET_ONE_USER_SUCCESS':
      let copyUser = { ...state };
      copyUser.user = action.data;
      console.log(' copyUser.user', copyUser.user);
      return { ...copyUser };
    default:
      return state;
  }
};
export const getOneUserUseReducer = (data) => ({
  type: "GET_ONE_USER_SUCCESS",
  data: data,
});

function ReDucerReact() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch(getOneUserUseReducer({id: 226, email: 'long123@gmail.com', firstName: 'le', lastName: 'thanh', address: 'quang binh'}));
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const decrementa = () => {
    dispatch({ type: 'GET_ONE_USER_SUCCESS' });
    // GET_ONE_USER_SUCCESS :'GET_ONE_USER_SUCCESS',
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

export default ReDucerReact;
