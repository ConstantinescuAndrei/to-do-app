import React from 'react';
import { Button } from '@material-ui/core';
import ButtonStyle from '../buttonsStyles/buttonStyles';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch } from 'react-redux';
import { setTodoComplete } from '../../../Redux/actions';

const FinishTodoButton = ({ id, username }) => {
    const buttonStyle = ButtonStyle();
    const dispatch = useDispatch();
    const todo_data = { id, username };

    const setTodoCompleteHandle = (e) => {      
        e.preventDefault(); 
        dispatch(setTodoComplete(todo_data));
    }

    return (
        <Button 
            className={buttonStyle.submitButton}
            startIcon={<DoneIcon />}
            onClick={setTodoCompleteHandle}
        >
            Finish
        </Button>
    )
}

export default FinishTodoButton
