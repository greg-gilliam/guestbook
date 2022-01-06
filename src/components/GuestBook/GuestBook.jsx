import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  function updateGuestList() {
    if (!guestEntry) {
      alert('Please write an entry!');
    } else {
      setEntries([...entries, { name: user, message: guestEntry }]);
      setGuestEntry('');
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestList();
  };

  const displayMessage = user
    ? `Thanks for signing the guestbook ${user}!`
    : 'Please sign the guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
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
              onClick={() => {
                setUser('');
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
