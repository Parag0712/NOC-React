import React from 'react'
import { useSelector } from 'react-redux'

export default function ApproveCertificatesPage() {
    const {certificateData} = useSelector((state)=>state.certificate);
    const {currentUser} = useSelector((state)=>state.user);
    console.log(certificateData);
    console.log(currentUser.isAdmin);
    return (
        <div>ApproveCertificates</div>
    )
}
