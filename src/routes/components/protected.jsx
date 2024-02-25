import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const { status } = useSelector((state) => state.user)

    useEffect(() => {
        if (authentication && status !== authentication) {
            navigate('/login')
        } else if (!authentication && status !== authentication) {
            navigate('/')
        }

    }, [status,navigate]);

    return <>{children}</>
}

