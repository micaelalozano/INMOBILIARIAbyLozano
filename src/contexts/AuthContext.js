import * as React from "react";

const AuthContext = React.createContext();

const DEFAULT_USER = {};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(DEFAULT_USER);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
