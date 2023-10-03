 
const InpusCps = ({ focuslableInPut, nameLable, type, value, onChange, placeholder, validations,emailValidate,inputError,  ...ref }) => {

  return (
    <div className={`col-md-6 input-control`}>
      <label htmlFor={focuslableInPut} className="form-label">
        {nameLable}
      </label>
      <input
        type={type}
        className={`form-control ${inputError ? 'errorDiv' : ''}`}
        id={focuslableInPut}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
     {inputError && <div className="errorDiv">Vui lòng nhập {nameLable}.</div>}
    </div>
  );
};

export default InpusCps;

