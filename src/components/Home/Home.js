import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./Home.css";

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="mainPart">
            <div className="Home">

                <Typography variant="h1" component="div" gutterBottom paddingTop="12%" paddingLeft="5%">
                    Edu <br />
                    Site <br />

                </Typography>
            </div>
            <div>
                <Typography variant="h2" component="div" gutterBottom paddingLeft="5%" paddingY="2%" textAlign='center'>
                    Offered Top Courses

                </Typography>

                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingLeft="15%" >

                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.key}
                            course={course}>
                        </Course>)

                    }

                </Grid>
            </div>
        </div>
    );
};

export default Home;