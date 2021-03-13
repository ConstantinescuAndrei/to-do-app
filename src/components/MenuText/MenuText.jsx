import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cyan } from '@material-ui/core/colors';

const useStyles = makeStyles({
    paper: {
        height: '100vh',
        backgroundColor: cyan[50],
        display: 'flex',
        justifyContent: "center"
    },
    title: {
        display: "block",
        marginTop: "15vh",
        display: "flex",
        justifyContent: "center"
    },
    content: {
        marginTop: "25%",
        display: "flex",
        justifyContent: "center"
    },
    typography: {
        marginLeft: "10%",
        marginRight: "5%",
    },
})

const MenuText = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div>
                <div className={classes.title}>
                    <Typography variant="h3">Welcome to working organizator.</Typography>
                </div>
                <div className={classes.content}>
                    <Typography variant="h4" className={classes.typography}>The best website to organize your near future work</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default MenuText
