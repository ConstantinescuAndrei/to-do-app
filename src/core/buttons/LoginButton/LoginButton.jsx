import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ButtonStyle from '../buttonsStyles/buttonStyles';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none"
    }
}))

const LoginButton = () => {
    const classes = useStyles();
    const buttonStyle = ButtonStyle();

    return (
        <Link to="/login" className={classes.link}>
            <Button
                variant="contained"
                className={buttonStyle.submitButton}
            >
                Login
            </Button>
        </Link>
    )
}

export default LoginButton
