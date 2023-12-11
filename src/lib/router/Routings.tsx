import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import UseAuth from '../components/auth/useAuth';
import NotFounded from '../pages/404';

import { routes, privateRoutes } from './routes';

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <UseAuth
                redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
              >
                {element}
              </UseAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="*" element={<NotFounded />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;