import React, { useState } from "react";
import { UserContext } from "../context";
import { useLocalStorage } from "../hooks";

function UserProvider({ children, ...rest }) {
  /*const [token = null] = */useLocalStorage("token", "");
  const [currentUser, setCurrentUser] = useState({});
  const userState = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={userState} {...rest}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
