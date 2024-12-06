/* eslint-disable perfectionist/sort-imports */
import { ToastContainer } from 'react-toastify';
import 'src/global.css';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from './backend/AuthService';
import { setToken, signInSuccess, signOutUserSuccess } from './redux/User/userSlice';
import { addCertificates } from './redux/User/certificateSlice';
import CertificateService from './backend/CertificateService';
// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const token = user?.currentUser?.accessToken;

  // State variable to track if user data has been fetched
  const [userDataFetched, setUserDataFetched] = useState(false);

  useEffect(() => {
    if (token && !userDataFetched) {
      AuthService.getAuthUser(token)
        .then((response) => {
          const { refreshToken, accessToken } = response.data.tokens;
          dispatch(setToken({ accessToken, refreshToken }));
          const userData = { ...response.data.user, refreshToken, accessToken };
          
          if (userData.isAdmin === true) {
            CertificateService.getAllCertificate()
              .then((certResponse) => {
                dispatch(addCertificates(certResponse.data.certificate));
              })
              .catch((error) => {
                console.error(error);
              });
          }

          dispatch(signInSuccess(userData));
          setUserDataFetched(true); // Mark user data as fetched
        })
        .catch((error) => {
          if (error.response?.data?.message === "Invalid Access Token") {
            dispatch(signOutUserSuccess());
          }
          console.error(error);
        });
    }
  }, [token, userDataFetched, dispatch]);

  return (
    <ThemeProvider>
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}
