import { useReducer } from 'react';
import { useEffect, useState } from 'react';
import {useDispatch, connect, useSelector } from 'react-redux';

 

export const updateBook = (number) => {
  return {
    type: 'SET_NUMBER',
    data: number
  };
};

const Duck = ()=>{
  const [number,setNumber] = useState(Number);
  const dispatch = useDispatch();

  const handleClick = (text)=>{
    if(text == 'tang'){
      setNumber(number + 1)
    }
    if(text == 'giam'){
      setNumber(number - 1)
    }
    if(text == 'reset'){
      setNumber(0)
    }
   
    dispatch(updateBook(number))
  } 
  // const dataUserRedux = useSelector(state => state.user);
  // console.log('check Redux',dataUserRedux);
   

  // useEffect(() => {
  //   handleClick();
  // }, []); 
    return(
        <div >
            <input type="text" name="" value={number}/>
            <button onClick={() => {handleClick('tang')}}>Tăng</button>
            <button onClick={() => {handleClick('giam')}}>Giảm</button>
            <button onClick={() => {handleClick('reset')}}>Reset</button> 
         
         
         
         </div>
    )
}

export default Duck 