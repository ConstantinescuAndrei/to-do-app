import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../Redux/actions';
import cyan from '@material-ui/core/colors/cyan';
import ToDo from './ToDo/ToDo';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[50],
        height: '100vh'
    },
    toDoItem: {
        marginTop: "5vh",
    } 
}))

const Index = () => {
    const classes = useStyles();
    const todos = useSelector(state => state.todos.todos)
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos(user));
    }, [])
    return (
        <Grid container item>        
            {
                todos.map((todo) => {
                    return (
                        <>
                            <Grid item sm={1} md={1} />
                                <Grid item sm={10} md={4} className={classes.toDoItem}>
                                    <ToDo todo={todo} key={todo._id}/>
                                </Grid>
                            <Grid item sm={1} md={1} />
                        </>
                    );
                })
            }
        </Grid>
    )
}

export default Index
