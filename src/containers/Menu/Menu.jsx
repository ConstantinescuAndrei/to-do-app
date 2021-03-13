import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cyan, grey } from '@material-ui/core/colors';
import MenuText from '../../components/MenuText/MenuText';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    paper: {
        height: "100vh",
        backgroundColor: cyan[50]
    },
    grid: {
        backgroundColor: grey[200]
    }
}))

const Menu = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user);

    return (
        <Grid container item>
            <Grid item sm={1} md={2} className={classes.grid}><Paper className={classes.grid}/></Grid>
            <Grid item sm={10} md={8}>
            {
                user.username === '' ? (
                    <MenuText />
                ) : ''
            }         
            </Grid>
            <Grid item sm={1} md={2} className={classes.grid}><Paper className={classes.grid}/></Grid>
        </Grid>
    )
}

export default Menu
