import React, { FC, useState } from 'react';
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

    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const handleShowAlert = () => {
        setOpenAlert(prev => !prev);
    };

    return <Box className={classes.root}>
        <Typography variant="h6">{title}</Typography>
        <Box py={2}>
            <Button color="primary" variant="contained" onClick={handleShowAlert}>Show alert</Button>
        </Box>
        <Alert 
            isOk={false} 
            isError  
            title="Titre de l'alerte" 
            open={openAlert} 
            setOpen={setOpenAlert} 
            withBtnAction 
            type="confirm" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque." 
        />
    </Box>;
}

export default Section;