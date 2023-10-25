import React, { useContext } from 'react';
import { ContextA } from './ComponentA';
function ComponentC() {
  const { dataA } = useContext(ContextA);

  return (
    <div>
      <h2>Component C</h2>
      <p>Data from A in Component C: {dataA}</p>
    </div>
  );
}

export default ComponentC;
