import React, { useState, useEffect } from "react";

const DOG = (props) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');


    // useEffect(() => {
    //   //  setNumber(number +1);
    // }); 
    //=> Miễn gì có state thay đổi là nó chạy
    


    // useEffect(() => {
    //   console.log("Component đã được mount");
    //    setNumber(number +1);
    // }, []);
    //Như didMuont => chỉ chạy 1 lần duy nhất
  
    console.log('Index');

  //3. Chỉ muốn chạy khi [dependency] thay đổi <--> 
    useEffect(() => {
      console.log("Component đã được cập nhật");
    setNumber(number +1);
    }, [text]);
   
  const handleNumber = ()=>{
    setNumber(number + 1 );
  }
  const handleOnchange = (event)=>{
    setText(event.target.value);
  }
  
  return (
    <div>
      {console.log("JSX")}
      <h1>"Hello"</h1>
        <button type="" onClick={()=>{handleNumber()}}>Number</button>
        <input   value ={number} onChange={()=>{}}  placeholder="Number"  />
        <input   value={text} onChange={ (event)=>{handleOnchange(event)}} 
          placeholder="Text"
        />
    </div>
  );
};

export default DOG;

 