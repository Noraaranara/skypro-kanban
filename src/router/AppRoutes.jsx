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
import { useContext, useState } from 'react';
import { AuthContext } from '../context/contextApi';

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={!!user} />}>
          <Route path={ROUTER.main} element={<MainPage />}>
            <Route path={ROUTER.newCard} element={<PopNewCardPage />} />
            <Route path={ROUTER.popCardDynamic} element={<PopBrowsePage />} />
            <Route path={ROUTER.popExit} element={<PopExitPage />} />
          </Route>
        </Route>
        <Route path={ROUTER.signIn} element={<SignInPage />} />
        <Route path={ROUTER.signUp} element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
