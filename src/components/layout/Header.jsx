import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>You are signing the guestbook as {user}</p>
      ) : (
        <p>Please sign in!</p>
      )}
    </header>
  );
}
