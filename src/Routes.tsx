import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';

import Home from './pages/Home';

import { ROUTES } from './lib/constants/Routes';

const Routes = () => {
  const location = useLocation();

  return (
    <RouterRoutes location={location} key={location.key}>
      <Route index element={<Home />} />
      {ROUTES.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </RouterRoutes>
  );
};

export default Routes;
