import React, { createContext } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};

export { GeneralContext };
