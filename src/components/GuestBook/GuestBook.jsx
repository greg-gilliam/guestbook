import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  function updateGuestList() {
    if (!guestEntry) {
      alert('Please write an entry!');
    } else {
      setUser(name);
      setEntries([...entries, { name, message: guestEntry }]);
      setGuestEntry('');
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestList();
  };

  const guestNameInput = (
    <div>
      <div>
        <label htmlFor="guestName">Guest Name</label>
      </div>
      <div>
        <input
          id="guestName"
          type="text"
          placeholder="Guest Name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </div>
  );

  const displayMessage = user
    ? `Thanks for signing the guestbook ${user}!`
    : 'Please sign the guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <div>
          <div>
            <label htmlFor="guestEntry">Guest Entry</label>
          </div>
          <div>
            <textarea
              id="guestEntry"
              value={guestEntry}
              placeholder="Your entry!"
              onChange={(event) => setGuestEntry(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="button" type="submit">
            Click to Sign!
          </button>
          {user && (
            <button
              type="button"
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              Not {user}? Click here!
            </button>
          )}
        </div>
      </form>
    </>
  );
}
