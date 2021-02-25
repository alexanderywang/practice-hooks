import React, { useContext } from "react";

import { UserContext } from "./Context";

const Dashboard = () => {
  // const user = useContext(UserContext);

  const [user, setUser] = useContext(UserContext);

  const changeEmail = () => {
    setUser({
      ...user,
      email: "updateAlex@email.com"
    });
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <span>
        Logged in as {user.name} ({user.email})
      </span>
      <br />
      <button onClick={changeEmail}>Change email</button>
    </div>
  );
};

export default Dashboard;
