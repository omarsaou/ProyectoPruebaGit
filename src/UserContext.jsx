
import React, { createContext, useContext, useState } from "react";


const UserContext = createContext();


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') || 'ayudado';
  });

  const updateUserRole = (role) => {
    localStorage.setItem('userRole', role);
    setUserRole(role);
  };

  return (
    <UserContext.Provider value={{ userRole, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};