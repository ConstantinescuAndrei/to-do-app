import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ButtonStyle from '../buttonsStyles/buttonStyles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        textDecoration: "none"
    }
})

const LogoutButton = () => {
    const buttonStyle = ButtonStyle();
    const classes = useStyles();

    return (
        <Link to='/create-todo' className={classes.link}>
            <Button
                variant="contained"
                className={buttonStyle.submitButton}
            >
                Create new todo
            </Button>
        </Link>
    )
}

export default LogoutButton
