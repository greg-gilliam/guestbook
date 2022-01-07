import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import { useUser } from '../../context/UserContext';

export default function PrivateRoutes({ children, ...rest }) {
  let auth = useAuth();
  // const user = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
