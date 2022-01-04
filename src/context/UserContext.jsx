import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const value = useMemo(() => ({ user, setUser }, [user]));
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Provider'
    );
  }
  return context;
};

export { UserProvider, useUser };
