import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';
// Tạo một context cho dữ liệu từ A
export  const ContextA = createContext();

function ComponentA() {
  const [dataA, setDataA] = useState('Data from A');

  const handleOnchange = (e)=>{
    setDataA(e)
  }
  return (
    <>
    <ContextA.Provider value={{ dataA }}>
      <div>
        <input type="" name="" value={dataA} onChange={ (e)=>{handleOnchange(e.target.value)}}/>
        <h2>Component A</h2>
        <p>Data in Component A: {dataA}</p>
        <ComponentB />
      </div>
    </ContextA.Provider>
    <ComponentD/>
    </>
  );
}

export default ComponentA;
