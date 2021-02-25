import React, { useMemo } from "react";

const UseMemoHook = () => {
  /*
  This hook expects a function that returns the computed value. The second parameter is again the dependency list, just as for other hooks.
Note that useMemo(() => fn, []) is equivalent to useCallback(fn, []).
Just as for useCallback, only use useMemo if you experience performance issues. Don't optimize prematurely.
*/
  // const memoizedValue = useMemo(() => getFibonacciArray(length), [length])

  return <div></div>;
};

export default UseMemoHook;
