import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => 
    createStyles({
        root: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 50,
            background: 'rgba(0, 0, 0, 0.6)',
        },
        block: {
            display: 'block',
        },
        none: {
            display: 'none',
        },
        alertContent: {
            position: 'fixed',
            width: 'auto',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '100%',
            background:'white',
            zIndex: 100,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '1px 3px 5px 0px rgba(0,0,0,0.75)',
            padding: 16,
            borderRadius: 5,
        },
        titleContent: {
            borderBottom: '1px solid rgba(0,0,0,0.2)',
        },
        title: {
            fontWeight: 'bold',
        },
        link: {
            color: 'red',
        },
        blockContent: {
            padding: '16px 0',
        },
        confirmed: {
            padding: '16px 0',
            color: 'green',
        },
        error: {
            padding: '16px 0',
            color: 'red',
        },
    }),
);