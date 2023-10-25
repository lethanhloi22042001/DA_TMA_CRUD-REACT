import React, { useState, useEffect } from "react";

const Duck = (props) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
   //1. Nói đầu
    //Khi có state thay đổi (hay còn gọi là khi component re-render)
    // useEffect(() => {
    //   console.log("Chạy mệt nghĩ"); 
    //   //  setNumber(number +1);
    // }); //=> Miễn gì có state thay đổi là nó chạy
    

  // 2.Áp nó như didMuont ở bên Class
  // không có biến giá trị thay đổi nên nó chỉ chạy 1 lần duy nhất khi render
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
  //Sẽ chạy 1 lần đầu như didMuont và theo giỏi messgae(Chạy log tiếp lần thứ 2 nếu giá trị message thay đổi)
  //useEffect chạy mỗi khi một biến count thay đổi
  // Theo giỏi message , nếu message thì log mới được chạy

   

    // Tất cả 3 trường hợp trên đều là useEffect nên nó sẽ được chạy và nạp lần đầu tiên ngay sau khi chạy jsx
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
        <input type="" name="" value={number}  placeholder="Number"  />
        <input type="" name="" value={text} onChange={ (event)=>{handleOnchange(event)}} 
          placeholder="Text"
        />
    </div>
  );
};

export default Duck;


//CHANGE
// import React, { useEffect, useState } from "react";

// function Duck() {
//   const [message, setMessage] = useState("Hello");

//   // useEffect(() => {
//   //   // Được gọi sau khi component đã render lần đầu tiên
//   //   console.log("Component đã được mount");
//   //   setMessage('Hello 2');
//   // }, []);

//   useEffect(() => {
//     // Được gọi sau mỗi lần state hoặc props thay đổi
//     console.log("Component đã được cập nhật");
//     setMessage('Hello 2');
//   });

//   return (
//     <div>
//       {console.log('JSX')}
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default Duck;

