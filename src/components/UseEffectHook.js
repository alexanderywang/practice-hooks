import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendered");

    //optional for unmounting, removing event listeners, unsubsriving from events, free up unused memory
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <div>
      <h3>useEffect hook:</h3>
      <div>
        {Array(count)
          .fill("🥑")
          .join(",")}
      </div>
      <button onClick={() => setCount(count + 1)}>Add avocado</button>
    </div>
  );
};

export default UseEffectHook;
