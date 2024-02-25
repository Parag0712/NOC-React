/* eslint-disable perfectionist/sort-imports */
import { ToastContainer } from 'react-toastify';
import 'src/global.css';


import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import AuthService from './backend/AuthService';
import { useDispatch } from 'react-redux';
import { signInFailure, signInSuccess } from './redux/User/userSlice';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInSuccess());
    AuthService.getAuthUser()
      .then((val) => {
        // const refreshToken = val.data.refreshToken;
        const userData = { ...val.data.user };
        console.log(userData);
        dispatch(signInSuccess(userData))
        console.log("eh");
      }).catch((error) => {
        console.log(error);
        dispatch(signInFailure());
      })
  }, []);

  return (
    <ThemeProvider>
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}
