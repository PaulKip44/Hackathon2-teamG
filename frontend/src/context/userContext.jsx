import { createContext, useState, useMemo } from "react";

const CurrentUserContext = createContext();

export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );
  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
