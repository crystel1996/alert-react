import React, { FC, MouseEvent, useState, useEffect } from 'react';
import { Box, Typography, Button, Link } from '@material-ui/core';
import { Close, CheckCircleOutline, Error } from '@material-ui/icons';
import classnames from 'classnames';
import { AlertInterface } from './interfaces';
import { useStyles } from './styles';

const Alert: FC<AlertInterface> = ({
    title,
    withBtnAction,
    type,
    content,
    open,
    setOpen,
    isError,
    isOk,
}) => {

    const classes = useStyles();
    const [isConfirm, setIsConfirm] = useState<boolean>(false);
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if(isConfirm) { 
            (async function updateStateConfirm () {
                await setTimeout(() => {
                    setIsConfirm(false);
                }, 3000);
            })().then(() => {
                if(isError) {
                    setError(true);
                    setConfirmed(false);
                    setIsConfirm(false);
                }
                if(isOk) {
                    setConfirmed(true);
                    setIsConfirm(false);
                    setError(false);
                }
            }).then(() => {
                setTimeout(() => {
                    setIsConfirm(false);
                    setError(false);
                    setConfirmed(false);
                    setOpen && setOpen(false);
                },3000);
            });
        }
    },[isConfirm, isError, isOk, setOpen]);

    const handleCloseAlert = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setOpen && setOpen(false);
    }

    const handleConfirm = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsConfirm(true);
    }

    return <Box className={classnames(classes.root, open ? classes.block : classes.none)}>
            <Box className={classes.alertContent}>
                <Box className={classes.titleContent} display="flex" flexDirection="row" justifyContent="space-between">
                    <Typography className={classes.title}>{title}</Typography>
                    <Link href="#" onClick={handleCloseAlert} className={classes.link}>
                        <Close />
                    </Link>
                </Box>
                {!confirmed && !error && (
                    <Box className={classes.blockContent}>
                        <Typography>{content}</Typography>
                    </Box>
                )}
                {withBtnAction && !confirmed && !error && (
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <Box px={1}>
                            <Button variant="contained" onClick={handleCloseAlert}>Annuler</Button>
                        </Box>
                        <Box px={1}>
                            <Button variant="contained" color="secondary" onClick={handleConfirm}>
                                {isConfirm ? 'Chargement. . .' : 'Confirmer'}
                            </Button>
                        </Box>
                    </Box>
                )}
                {confirmed && !error && (
                    <Box className={classes.confirmed} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <CheckCircleOutline />Opération successfull!
                    </Box>    
                )}
                {error && !confirmed && (
                    <Box className={classes.error} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Error /> Une erreur est survenue!
                    </Box>
                )}
            </Box>
    </Box>;
}

export default Alert;