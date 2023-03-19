import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
  const location = useLocation();

  return (
    <RouterRoutes location={location} key={location.key}>
      <Route index element={<Home />} />
    </RouterRoutes>
  );
};

export default Routes;
