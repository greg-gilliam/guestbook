import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  console.log('$$$', context);
  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Provider'
    );
  }
  return context;
};

export { UserProvider, useUser };
