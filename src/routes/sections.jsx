import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import Protected from './components/protected';

export const IndexPage = lazy(() => import('src/pages/app'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------
export default function Router() {

  const routes = useRoutes([
    {
      element: (
        <Protected authentication={true}>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout >
        </Protected>
      ),
      children: [
        {
          element:
            <IndexPage />
          , index: true
        },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'profile', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element:
        <Protected authentication={false}>
          <LoginPage />
        </Protected>,
    },

    {
      path: 'register',
      element:
        <Protected authentication={false}>
          <RegisterPage />
        </Protected>
      ,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
