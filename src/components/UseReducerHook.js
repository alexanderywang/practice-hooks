import React, { useReducer } from "react";

/*******
 * alternative to useState when state gets complex
 * defined outside the component
 * pure function, don't mutate state
 * state - current state
 * aciton - value of whatever you pass into the dispatch function that is returned from useReducer
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "remove":
      return state - 1;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>useReducer hook:</h3>
      {/* equivalent */}
      {/* <button onClick={() => dispatch('add')}>Addvocado</button>
            <button onClick={() => dispatch('remove')}>Removocado</button> */}
      <button onClick={() => dispatch({ type: "add" })}>Add avocado</button>
      <button onClick={() => dispatch({ type: "remove" })}>
        Remove avocado
      </button>
      <div>
        {Array(state)
          .fill("🥑")
          .join(",")}
      </div>
    </div>
  );
};

export default UseReducerHook;
