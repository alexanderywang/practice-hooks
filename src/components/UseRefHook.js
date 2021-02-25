import React, { useRef } from "react";

const UseRefHook = () => {
  const inputElement = useRef(null);

  const onClick = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <React.Fragment>
        <h3>useRef hook:</h3>
        <input ref={inputElement} type="text" />
        <button onClick={onClick}>Focus input</button>
      </React.Fragment>
    </div>
  );
};

export default UseRefHook;
