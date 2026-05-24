import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTER } from './router';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import MainPage from '../pages/Main';
import PopNewCardPage from '../pages/PopNewCard';
import PopBrowsePage from '../pages/PopBrowse';
import PopExitPage from '../pages/PopExit';
import NotFoundPage from '../pages/NotFound';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import { useState } from 'react';

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path={ROUTER.main}
            element={<MainPage setIsAuth={setIsAuth} />}
          >
            <Route path={ROUTER.newCard} element={<PopNewCardPage />} />
            <Route path={ROUTER.popCard} element={<PopBrowsePage />} />
            <Route path={ROUTER.popExit} element={<PopExitPage />} />
          </Route>
        </Route>
        <Route
          path={ROUTER.signIn}
          element={<SignInPage setIsAuth={setIsAuth} />}
        />
        <Route path={ROUTER.signUp} element={<SignUpPage />} />
        <Route path={ROUTER.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
