import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ redirectTo = '/', component }) {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return isLogged ? component : <Navigate to={redirectTo} />;
}
