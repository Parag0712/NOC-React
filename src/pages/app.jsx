import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppFormView, Resubmit } from 'src/sections/app';
import { useEffect, useState } from 'react';
import {
  updateApproveState,
  updatePendingState,
  updateRejectState,
} from 'src/redux/User/certificateSlice';
import CertificateService from 'src/backend/CertificateService';

export default function AppPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [certificateData, setCertificateData] = useState([]);
  const [lastCertificateData, setLastCertificateData] = useState(null);
  const [statePending, setStatePending] = useState(false);
  const [reject, setReject] = useState(false);
  const [approve, setApprove] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser?.accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await CertificateService.getUserCertificate(currentUser.accessToken);
        setCertificateData(response.data.certificate);
      } catch (error) {
        console.error('Error fetching certificate:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  useEffect(() => {
    if (certificateData && certificateData.length > 0) {
      const lastItem = certificateData[certificateData.length - 1];
      setLastCertificateData(lastItem);

      // Set states based on the status of the last item
      if (lastItem.certificate_status === 'false') {
        setReject(true);
        setStatePending(false);
        setApprove(false);
        dispatch(updateRejectState());
      } else if (lastItem.certificate_status === 'true') {
        setApprove(true);
        setStatePending(false);
        setReject(false);
        dispatch(updateApproveState());
      } else {
        setStatePending(true);
        setReject(false);
        setApprove(false);
        dispatch(updatePendingState());
      }
    }
  }, [certificateData, dispatch]);

  if (loading) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 3 }}>
        Loading...
      </Typography>
    );
  }

  if (currentUser?.isAdmin) {
    return <AppFormView />;
  }

  return (
    <>
      {reject && (
        <>
          <Typography>You can resubmit your form due to rejection.</Typography>
          <AppFormView reject={reject} />
        </>
      )}

      {approve && (
        <Resubmit
          textMessage="Your application has been approved."
          data={lastCertificateData}
          approve
          link
        />
      )}

      {statePending && <Resubmit textMessage="Your application is already submitted." />}

      {!reject && !statePending && !approve && <AppFormView />}
    </>
  );
}
