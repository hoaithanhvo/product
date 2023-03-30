import React, { useState } from "react";

function input(props: any) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  );
}

export default input;
