import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { UserProvider } from "./Context";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

/******
equivalent to static context = UserContext in class based component
read context that is shared between components, subscribe to changes

*/
const UseContextHook = () => {
  const user = {
    name: "Alex",
    email: "alex@email.com"
  };

  const [state, setState] = useState(user);
  
  return (
    <BrowserRouter>
      <h3>useContext hook:</h3>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <UserProvider value={[state, setState]}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </UserProvider>
    </BrowserRouter>
  );
};

export default UseContextHook;
