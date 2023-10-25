import React, { useState } from 'react';

function ChildComponent(props) {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    props.sendDataToParent(message); // Gửi dữ liệu từ con lên cha
  }
  
  // const handleReset = () => {

  // }

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send Message to Parent</button>

    </div>
  );
}

export default ChildComponent;
