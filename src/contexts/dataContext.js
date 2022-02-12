import { createContext,useContext } from "react";


const theContext = createContext();

export const DataProvider = ({value,children}) => {
  return (
    <theContext.Provider value={value}>
      {children}
    </theContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(theContext);
}