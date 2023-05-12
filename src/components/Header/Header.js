import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // navigation
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs "
            >
                <Tab value="one" label="Home" to='/home' component={Link} />
                <Tab value="two" label="About" to='/about' component={Link} />
                <Tab value="three" label="Courses" to='/courses' component={Link} />
                <Tab value="four" label="Contact" to='/contact' component={Link} />
            </Tabs>
        </Box>
    );
};

export default Header;