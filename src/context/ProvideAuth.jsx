import { createContext, useState } from 'react';

const authContext = createContext();

export default function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const loginSuccess =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;

    if (loginSuccess) setUser({ username });
    return loginSuccess;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
