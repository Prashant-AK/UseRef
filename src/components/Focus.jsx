import React, { useState, useRef } from 'react';
import './Style.css';
export function Focus() {
  const [insert, setInsert] = useState('');
  const reference = useRef(); // <- FOCUS HERE

  const handleOnchange = (e) => {
    setInsert(e.target.value);
  };
  const returnCursor = () => {
    reference.current.focus();
  };
  console.log('Focus Component');
  return (
    <div>
      <input
        type="text"
        placeholder="use reference"
        value={insert}
        onChange={handleOnchange}
        className="input"
        ref={reference}
      />
      <div>
        <p className="text">{insert}</p>
      </div>
      <div className="button">
        <input type="button" value="Return cursor" onClick={returnCursor} />
      </div>
    </div>
  );
}
