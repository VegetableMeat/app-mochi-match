import React from 'react';
import './css/ShadowInputArea.css';

const ShadowInputArea = React.forwardRef(({ placeholder, value, onChangeValue, handleKeyDown }, ref) => {

  return (
    <div className="shadow-input-area">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={ref}
      ></input>
    </div>
  );

});

export default ShadowInputArea;
