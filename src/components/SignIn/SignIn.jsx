import { Link } from 'react-router-dom';
import { ROUTER } from '../../router/router';
import AuthForm from '../AuthForm/AuthForm';

function SignIn({ setIsAuth }) {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />;
}

export default SignIn;
