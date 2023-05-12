import { Typography } from '@mui/material';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='main'>
            <Typography variant="h2" component="div" gutterBottom paddingTop="8%" >
                About <br />
                EduSite<br />

            </Typography>
            <Typography variant="h6" component="div" gutterBottom paddingTop="2%" paddingX="3%" textAlign="center" >
                For English description, please scroll down to the bottom. GREC uses Bangla as the means of communication and dissemination of information because we have data-driven evidence that our visitors are more engaged and better retainer of the information if they receive it in Bangla. Specialized Instruction to Fit Your Needs. Your Satisfaction is Guaranteed. Master the GRE Using Our Private Classes. GRE Help Trusted by Thousands of Students. Find Private GRE Tutoring. Affordable GRE Tutoring. Meet In-Home Or Online.


            </Typography>
        </div>
    );
};

export default About;