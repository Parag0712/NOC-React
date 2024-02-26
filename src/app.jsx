/* eslint-disable perfectionist/sort-imports */
import { ToastContainer, toast } from 'react-toastify';
import 'src/global.css';


import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import AuthService from './backend/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, signInFailure, signInSuccess } from './redux/User/userSlice';
import { addCertificate, addCertificates } from './redux/User/certificateSlice';
// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();

  const  user = useSelector((state) => state.user);
  // const { certificateData,approve,reject,statePending }  = useSelector((state) => state.certificate);
  
  const token = user?.currentUser?.accessToken;
  // State variable to track if user data has been fetched
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [certificate, setCertificate] = useState([]);
  
  useEffect(() => {
    if (token && !userDataFetched) {
      AuthService.getAuthUser(token)
        .then((val) => {
          const refreshToken = val.data.tokens.refreshToken;
          const accessToken = val.data.tokens.accessToken;
          dispatch(setToken({accessToken,refreshToken}));
          const userData = { ...val.data.user, refreshToken, accessToken };
          const certificates = userData.certificateIssue
            dispatch(addCertificates(certificates))
          
          // setCertificate(certificates)

          console.log(certificate);
          dispatch(signInSuccess(userData));
          setUserDataFetched(true); // Mark user data as fetched
        })
        .catch((error) => {
          console.log(error);
          dispatch(signInFailure());
        });
    }
  }, [token, userDataFetched]);


  // useEffect(()=>{
  //   console.log(certificate);
  //   dispatch(addCertificates(certificate))
  // },[certificate])

  return (
    <ThemeProvider>
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}
