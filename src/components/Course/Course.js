import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Course = (props) => {
    const { name, type, about, img, price } = props.course;

    return (
        <Grid item xs={6} >
            <Card sx={{ maxWidth: 455, minHeight: 430, maxHeight: 540, textAlign: 'justify' }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt="image"
                />
                <CardContent>
                    <Typography variant="h4" component="div" color="red">
                        {name}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div" color="gray">
                        {type}
                    </Typography>

                    <Typography variant="body1" gutterBottom color="text.secondary" >
                        {about}
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div" >
                        Price: {price} BDT
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Course;