import React, { useContext, createContext } from 'react';
import { ContextA } from './ComponentA';
import ComponentC from './ComponentC';
// Tạo một context cho dữ liệu từ B
// const ContextB = createContext();

function ComponentB() {
  const { dataA } = useContext(ContextA);

  return (
    // <ContextB.Provider value={{ dataA }}>
      <div>
        <h2>Component B</h2>
        <p>Data  B </p>
        <ComponentC />
      </div>
    // </ContextB.Provider>
  );
}

export default ComponentB;
