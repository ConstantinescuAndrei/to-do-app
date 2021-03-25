import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cyan } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    paper: {
        height: '100vh',
        backgroundColor: cyan[50],
        display: 'flex',
        justifyContent: "center"
    },
    title: {
        marginTop: "15vh",
        display: "flex",
        justifyContent: "center"
    },
    content: {
        marginTop: "25%",
        display: "flex",
        justifyContent: "center"
    },
    titleTypography: {
        marginLeft: "5%",
        fontSize: "3rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "2.5rem"
        }
    },
    bodyTypography: {
        marginLeft: "5%",
        fontSize: "2rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.5rem"
        }
    },
}));

const MenuText = () => {
    const classes = useStyles();

    return (
        <div style={{width: "100%"}}>
            <div className={classes.title}>
                <Typography variant="h3" className={classes.titleTypography}>Welcome to working organizator.</Typography>
            </div>
            <Divider />
            <div className={classes.content}>
                <Typography variant="h4" className={classes.bodyTypography}>The best website to organize your near future work</Typography>
            </div>
        </div>
    )
}

export default MenuText
