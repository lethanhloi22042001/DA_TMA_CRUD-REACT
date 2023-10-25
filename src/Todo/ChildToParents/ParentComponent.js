import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [messageFromChild, setMessageFromChild] = useState('');

  const handleChildData = (data) => {
    setMessageFromChild(data);
  }
   

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {messageFromChild}</p>
      <ChildComponent sendDataToParent={handleChildData}   />
    </div>
  );
}

export default ParentComponent;
