import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

const Login = React.lazy(() => import('../pages/login'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]);
