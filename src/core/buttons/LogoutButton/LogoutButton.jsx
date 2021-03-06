import React from 'react';
import { Button } from '@material-ui/core';
import ButtonStyle from '../buttonsStyles/buttonStyles';
import { useDispatch } from 'react-redux';
import { logout, deleteTodos } from '../../../Redux/actions';

const LogoutButton = () => {
    const buttonStyle = ButtonStyle();
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logout());
        dispatch(deleteTodos());
    }

    return (
            <Button
                variant="contained"
                className={buttonStyle.submitButton}
                onClick={logoutHandle}
            >
                Logout
            </Button>
    )
}

export default LogoutButton
