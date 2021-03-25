import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChipComponent from '../../../core/ChipComponent/ChipComponent';
import DeleteTodoButton from '../../../core/buttons/DeleteTodoButton/DeleteTodoButton';
import cyan from '@material-ui/core/colors/cyan';

const useStyles = makeStyles({
    cardRoot: {
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
        backgroundColor: cyan[100]
    }
})

const ToDo = ({ todo }) => {
    const classes = useStyles();
    
    return (
        <>
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography>{todo.title}</Typography>
                    <Typography>{todo.content}</Typography>
                    <Typography>{todo.date}</Typography>
                    <ChipComponent id={todo._id} username={todo.username} status={todo.status}/>
                    <DeleteTodoButton id={todo._id} username={todo.username} />
                </CardContent>
            </Card>
        </>
    )
}

export default ToDo
