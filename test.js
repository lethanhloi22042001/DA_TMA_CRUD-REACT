{/* <>
<input
  {...register("test", {
    validate: value => value === '1' || 'error message'  // JS only: <p>error message</p>  
  })}
  validate: (value) => {
  if (value === '1') {
    return undefined; // không có lỗi
  } else { return 'error message'; } }
/>

// object of callback functions
<input
  {...register("test1", {
    validate: {
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      validateNumber: (_: number, formValues: FormValues) => {
        return formValues.number1 + formValues.number2 === 3 || 'Check sum number';
      },
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'error message',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['test', 'test2']
    }
  })}
/></> */}