import React, { useContext } from 'react';
import { ContextA } from './ComponentA';
function ComponentD() {
  // const { dataA } = useContext(ContextA);

  return (
    <div>
      <h2>Component D</h2>
      {/* <p>Data từ A trong Component D mà không có sự truyền props cha-con: {dataA}</p> */}
    </div>
  );
}

export default ComponentD;
