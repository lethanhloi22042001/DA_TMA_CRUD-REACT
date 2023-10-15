// import { useForm } from "react-hook-form";

// export default function Chicken() {
//   const { register, handleSubmit,onBlur } = useForm();
//   const onSubmit = (data, e) => console.log('e', e);
//   const onError = (errors, e) => console.log(errors, e);
//   const handleOnBlur = (e) => {
//     const { name, value } = e.target;  // Lấy tên trường (name) và giá trị (value) từ sự kiện
//     console.log('Input name:', name);
//     console.log('Input value:', value);
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit, onError)}>
//       <input {...register("firstName")} onBlur={handleOnBlur} />
//       <input {...register("lastName")} onBlur={handleOnBlur} />
//       <button type="submit" {...register("submit")} onBlur={handleOnBlur}>Submit
//       </button>
//     </form>
//   );
// }
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Chicken() {
  const { register, handleSubmit, } = useForm();
  const [firstNameBlur, setFirstNameBlur] = useState(false);
  const [lastNameBlur, setLastNameBlur] = useState(false);

  const handleFirstNameBlur = () => {
    setFirstNameBlur(true);
  };

  const handleLastNameBlur = () => {
    setLastNameBlur(true);
  };

  const onSubmit = (data) => {
    console.log('Form data:', data);
    console.log('firstName onBlur status:', firstNameBlur);
    console.log('lastName onBlur status:', lastNameBlur);
  };
  const { setValue } = useForm({
    input1: "enter a value"
  });
  
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName')}
        // onBlur={handleFirstNameBlur}
        placeholder="First Name"
        onBlur={ (e) => setValue( "input1", e.target.value ) }
      />
      <input
        {...register('lastName')}
        // onBlur={handleLastNameBlur}
        onBlur={ (e) => setValue( "input1", e.target.value ) }
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
