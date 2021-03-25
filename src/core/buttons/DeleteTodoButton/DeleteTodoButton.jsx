import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../Redux/actions';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles({
    iconButton: {
        '&:hover': {
            backgroundColor: red[900],
            transition: '4.5s'
        },
    }
})

const DeleteTodoButton = ({ id, username }) => {
    const classes = useStyles();
    const todo = { id, username };
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        console.log("Hello");
        dispatch(deleteTodo(todo));
    }

    return (
        <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: "5%", marginTop: "2%", borderTop: "1px solid black"}}>
            <IconButton
                color="inherit"
                edge="end"
                className={classes.iconButton}
                onClick={deleteHandler}
            >
                <DeleteForeverIcon />
            </IconButton>
        </Box>        
    )
}

export default DeleteTodoButton
