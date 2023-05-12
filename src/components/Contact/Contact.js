import React from 'react';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <Typography variant="h2" component="div" gutterBottom paddingTop="12%" color="green"  >
                Contact Us

            </Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Name" color="success" focused /><br />
                <TextField label="email" color="success" focused /><br />
                <br />
                <Button variant="contained" color="success" >
                    Submit
                </Button>

            </Box>

        </div>
    );
};

export default Contact;