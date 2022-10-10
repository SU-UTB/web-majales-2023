import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';

import BandContest from './pages/BandContest';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Lineup from './pages/Lineup';
import NewsFeed from './pages/NewsFeed';
import NotFoundPage from './pages/NotFoundPage';
import Partners from './pages/Partners';

const Routes = () => {
  const location = useLocation();

  return (
    <RouterRoutes location={location} key={location.key}>
      <Route index element={<Home />} />
      <Route path="/lineup" element={<Lineup />} />
      <Route path="/soutez-kapel" element={<BandContest />} />
      <Route path="/kral-a-kralovna" element={<Lineup />} />
      <Route path="/aktuality" element={<NewsFeed />} />
      <Route path="/partneri" element={<Partners />} />
      <Route path="/konakt" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
};

export default Routes;
