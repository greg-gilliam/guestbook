import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { setUser } = useUser();
  const { formState, handleFormChange } = useForm({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (event) => {
    event.preventDefault();
    const loginSuccess = auth.login(formState.username, formState.password);

    if (loginSuccess) {
      setUser(formState.username);
      history.replace(from.pathname);
    } else {
      setError('Invalid username and/or password');
    }
  };

  return (
    <fieldset>
      <legend>Sign in</legend>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          value={formState.username}
          onChange={handleFormChange}
          id="username"
          type="text"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={formState.password}
          onChange={handleFormChange}
          id="password"
          type="password"
          name="password"
        />
        <button type="submit" aria-label="sign in">
          Sign in!
        </button>
      </form>
      {error && <h3>{error}</h3>}
    </fieldset>
  );
}
