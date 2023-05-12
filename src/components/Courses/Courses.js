import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom paddingLeft="5%" paddingY="2%" textAlign='center' color='Red'>
                Offered Courses

            </Typography>

            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 6 }} paddingLeft="10%" paddingBottom="5%" justifyContent="center" >

                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}>
                    </Course>)

                }

            </Grid>


        </div>
    );
};

export default Courses;