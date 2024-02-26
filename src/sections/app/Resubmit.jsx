import { Card, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Resubmit({textMessage,link}) {
    return (
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
                <Typography variant="h4">{textMessage} {link &&<Link>Check Here</Link>}</Typography>
            </Stack>
        </Card>
    )
}

export default Resubmit