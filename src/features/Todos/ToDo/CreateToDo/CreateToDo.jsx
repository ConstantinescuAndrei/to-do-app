import React, { useState } from 'react';
import { Grid, Box, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTodo } from '../../../../Redux/actions';
import ButtonStyle from '../../../../core/buttons/buttonsStyles/buttonStyles';
import cyan from '@material-ui/core/colors/cyan';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[50],
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        padding: "15%",
        borderRadius: "15%",
        boxShadow: "10px 5px 5px rgb(100, 100, 100)",
        backgroundColor: cyan[50]
    },
    textfield: {
        color: cyan[800],
    },
    typography: {
        marginBottom: "5%",
        borderBottom: "1px solid black"
    }
}))

const CreateToDo = () => {
    const classes = useStyles();
    const buttonStyle = ButtonStyle();
    const username = useSelector(state => state.user.user.username);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({title: '', content: '', username: username});

    const createTodoHandler = (e) => {
        e.preventDefault();

        dispatch(createNewTodo(todo));
    }

    return (
        <Grid container>
            <Grid item xs={1} md={2} />
                <Grid item sm={10} md={8} className={classes.root}>
                    <Box className={classes.box}>
                        <Typography variant="h4" className={classes.typography}>Create a new Todo</Typography>
                        <TextField 
                            className={classes.textfield}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth 
                            id="title"
                            label="Title"
                            name="title"
                            autoComplete="title"
                            onChange={(e) => setTodo({...todo, title: e.target.value})}
                            autoFocus 
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth 
                            id="content"
                            label="Content"
                            name="content"
                            autoComplete="content"
                            onChange={(e) => setTodo({...todo, content: e.target.value})}
                            autoFocus 
                        />
                        <Button
                            className={buttonStyle.submitButton}
                            onClick={createTodoHandler}
                        >
                            Create
                        </Button>
                    </Box>
                </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
    )
}

export default CreateToDo
