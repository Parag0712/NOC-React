import { createSlice } from '@reduxjs/toolkit';

const certificateSlice = createSlice({
    name: 'certificates',
    initialState: {
        certificateData: [],
        reject: "",
        approve: "",
        statePending: "",
    },
    reducers: {
        addCertificates: (state, action) => {
            action.payload.forEach((certificate, index) => {
                if (!state.certificateData.some(existingCert => existingCert._id === certificate._id)) {
                    state.certificateData.push(certificate);
                    if (index === action.payload.length - 1) {
                        if (certificate.certificate_status === 'pending') {
                            state.statePending = true;
                            state.reject = false;
                            state.approve = false;
                        } else if (certificate.certificate_status === false) {
                            state.reject = true;
                            state.statePending = false;
                            state.approve = false;
                        } else {
                            state.approve = true;
                            state.statePending = false;
                            state.reject = false;
                        }
                    }
                }
            });
        },
        addCertificate: (state, action) => {
            const newCertificate = action.payload;
            state.certificateData = [...state.certificateData, newCertificate];
        },
        removeCertificate: (state, action) => {
            const certificateIdToRemove = action.payload;
            state.certificateData = state.certificateData.filter(certificate => certificate.id !== certificateIdToRemove);
        },
        updateCertificate: (state, action) => {
            const updatedCertificate = action.payload;
            state.certificateData = state.certificateData.map(certificate =>
                certificate.id === updatedCertificate.id ? updatedCertificate : certificate
            );
        },
    },
});

export const { addCertificate, removeCertificate, updateCertificate, addCertificates } = certificateSlice.actions;
export default certificateSlice.reducer;
