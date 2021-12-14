import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>
          You are signing the guestbook as <span>{user}</span>
        </p>
      ) : (
        <p>Please sign in!</p>
      )}
    </header>
  );
};

export default Header;
