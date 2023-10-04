
import React, { useState } from "react";
// do vòng for thay đổi liên tục nên đoạn này phải dùng state
//cách 1 :  nếu không nhập thì cái ô đó thành false + name của cái đã bị chuyển thành false
const InpusCps = ({ focuslableInPut, nameLable, type, value, onChange, placeholder, inputError, ...ref }) => {
  return (
    <div className={`col-md-6 input-control`}>
      <label htmlFor={focuslableInPut} className="form-label">
        {nameLable}
      </label>
      <input
        type={type}
        className={`form-control ${inputError ===false ? '' : 'aloha'}`}
        id={focuslableInPut}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InpusCps;


 {/* đầu tiên mình phải fix đỏ hết */}
      {/* theo mình nghĩ là do set cái này nên nó chạy hết tất cả div , nên xí set lại */}
      {/* {inputError && !inputFocused && <div className="errorDiv">Vui lòng nhập {nameLable}.</div>} */}