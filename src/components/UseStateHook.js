import React, { useState } from "react";

const UseStateHook = () => {
  const [input, setInput] = useState("");
  /*
  const [objectState, setObjectState] = useState({
    name: "Alex",
    email: "alex@email.com"
  });
  // valid use of setting an object
  setObjectState({
    ...objectState,
    name: "Jane"
  });
  */
  const changeInput = e => {
    console.log("before", input);
    setInput(e.target.value);
    console.log("after", input);
  };
  return (
    <div>
      <h3>useState hook: </h3>
      <input type="text" value={input} onChange={changeInput} />
    </div>
  );
};

export default UseStateHook;
