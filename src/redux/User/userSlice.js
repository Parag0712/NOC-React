import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    currentUser: null,
    certificateData:null,
    error: null,
    loading: false,
    token:null,
}

// Create User Slice 
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingInStart: (state) => {
            state.loading = true;
            
        },
        loadingInStop: (state) => {
            state.loading = false
        },
        signInStart: (state) => {
            state.loading = true;
            state.loaded=false;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            state.status=true;
            state.loaded=true;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.status=false;
        },
        updateUserStart: (state) => {
            state.loading = true;

        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
            state.token = null
            state.status =false
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setToken: (state,action) => {
            state.token = action.payload;
        },
        removeToken: (state,payload) => {
            state.token = null
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        addCertificate: (state, action) => {
            state.certificateData = action.payload;
            state.loading = false;
            state.error = null;
        },
        removeCertificate: (state) => {
            state.certificateData = null;
            state.loading = false;
            state.error = null;
        }
    }
})

export const {
    loadingInStart,
    loadingInStop,
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart,
    addCertificate,
    removeCertificate,
    setToken,
    removeToken
} = userSlice.actions;

export default userSlice.reducer;