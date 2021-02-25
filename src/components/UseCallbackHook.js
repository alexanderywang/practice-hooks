import React, { useState, useCallback } from "react";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const addAvocado = () => {
    setCount(count + 1);
  };

  // rewrite this way
  const memoizedAddvocado = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <>
      <h3>useCallback hook:</h3>
      {/* <Addvocado add={addAvocado} /> */}
      <br></br>
      <AddvocadoWithMemo add={memoizedAddvocado} />
      <div>
        {Array(count)
          .fill("🥑")
          .join(",")}
      </div>
    </>
  );
};

export default UseCallbackHook;

// this rerenders every click despite no change in state
const Addvocado = ({ add }) => {
  console.log("component re-rendered");

  return <button onClick={add}>Add avocado with a lot of re-renders</button>;
};

// instead use callback and change to warp child component to React.memo to tell react it should only be re-rendered if one o fhte passed props change
const AddvocadoWithMemo = React.memo(({ add }) => {
  console.log("component re-rendered");

  return <button onClick={add}>Add memoized avocado</button>;
});
