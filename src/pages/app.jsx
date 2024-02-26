
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppFormView, Resubmit } from 'src/sections/app';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function AppPage() {


  const dispatch = useDispatch();
  const { certificateData, statePending = true, reject, approve } = useSelector((state) => state.certificate);
  return (
    <>
      {reject && (<><Typography>You can resubmit your form due to rejection.</Typography> <AppFormView /></>)}
      {reject && <AppFormView reject={reject} />}
      {approve && <Resubmit textMessage={"Your application has been approved."}  link="true" />}
      {statePending && <Resubmit textMessage={"Your application all ready submit."}  />}
      {!reject && !statePending && !approve && <AppFormView />}
      <AppFormView></AppFormView> 
    </>
  );
}
