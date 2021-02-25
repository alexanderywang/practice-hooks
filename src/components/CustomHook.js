import React from "react";

import useFetch from "./useFetch";

const CustomHook = () => {
  const [post, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h3> custom useFetch hook:</h3>
      <div>{loading ? "loading..." : post}</div>
    </div>
  );
};

export default CustomHook;
