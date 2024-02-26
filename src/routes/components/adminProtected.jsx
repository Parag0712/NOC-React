import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminProtected({children}) {
    const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.user)
    
    useEffect(() => {
        if (currentUser.isAdmin == false) {
            navigate('/')
        } 
    }, [currentUser, navigate]);

    return <>{children}</>
}
