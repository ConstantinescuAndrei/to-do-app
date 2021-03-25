import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import cyan from '@material-ui/core/colors/cyan';
import { useSelector } from 'react-redux';
import MainText from '../../core/MenuText/MenuText';
import Todos from '../Todos';

const useStyles = makeStyles({
    root: {
        backgroundColor: cyan[50],
        height: '100vh'
    }
})

const MainPage = () => {
    const user = useSelector(state => state.user.user)
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={1} md={2} />
                <Grid item sm={10} md={8} className={classes.root}>
                    {
                        user.username ? (<Todos />) : (<MainText />)
                    }
                </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
    )
}

export default MainPage
