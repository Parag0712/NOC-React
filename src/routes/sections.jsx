import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import Protected from './components/protected';
import ChangePasswordPage from 'src/pages/changePassword';
import AdminProtected from './components/adminProtected';

export const IndexPage = lazy(() => import('src/pages/app'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const BlogPage = lazy(() => import('src/pages/UpdateProfile'));
export const RejectCertificatePage = lazy(() => import('src/pages/RejectCertificates'));
export const ApproveCertificatePage = lazy(() => import('src/pages/ApproveCertificates'));
export const PendingCertificatePage = lazy(() => import('src/pages/PendingCertificates'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const MyCertificatePage = lazy(() => import('src/pages/mycertificate'));
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
        {
          path: 'PendingCertificate', element:
            <AdminProtected>
              <PendingCertificatePage />
            </AdminProtected>
        },
        { path: 'RejectCertificate', element: <AdminProtected><RejectCertificatePage /></AdminProtected> },
        { path: 'ApproveCertificate', element:<AdminProtected> <ApproveCertificatePage /></AdminProtected> },
        { path: 'mycertificate', element: <MyCertificatePage /> },
        { path: 'profile', element: <BlogPage /> },
        { path: 'ChangePassword', element: <ChangePasswordPage /> },
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
