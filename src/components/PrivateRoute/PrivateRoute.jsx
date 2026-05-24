import { Navigate, Outlet } from 'react-router-dom';
import { ROUTER } from '../../router/router';

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={ROUTER.signIn} />;
}

export default PrivateRoute;
