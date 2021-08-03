import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: "Mauricio",
    apellido: "Varela",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
