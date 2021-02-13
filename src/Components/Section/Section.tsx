import React, { FC } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { Alert } from './../Alert';
import { useStyles } from './style';

interface SectionComponent {
    title: string;
}

const Section: FC<SectionComponent> = ({
    title,
}) => {
    const classes = useStyles();
    return <Box className={classes.root}>
        <Typography variant="h6">{title}</Typography>
        <Box py={2}>
            <Button color="primary" variant="contained">Show alert</Button>
        </Box>
        <Alert />
    </Box>;
}

export default Section;