
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppFormView } from 'src/sections/app';

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


      <Card
        spacing={3}
        direction="row"
        sx={{
          px: 3,
          py: 5,
          borderRadius: 2,
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="h4">Your application has been approved. <Link>Check Here</Link></Typography>
        </Stack>
      </Card>
      {/* {reject && (<><Typography>You can resubmit your form due to rejection.</Typography> <AppFormView /></>)} */}
      {reject && <AppFormView reject={reject} />}
      {statePending && <Typography>You have already submitted your application.</Typography>}
      {!reject && !statePending && !approve && <AppFormView />}
    </>
  );
}
