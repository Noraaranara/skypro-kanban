import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTER } from './router';
import Main from '../components/Main/Main';
import PopNewCard from '../components/PopNewCard/PopNewCard';
import PopBrowse from '../components/PopBrowse/PopBrowse';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER.main} element={<Main />}>
          <Route path={ROUTER.newCard} element={<PopNewCard />} />
          <Route path={ROUTER.popCard} element={<PopBrowse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
