import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ButtonStyle from '../buttonsStyles/buttonStyles';

const useStyles = makeStyles({
    link: {
        textDecoration: "none"
    }
})

const RegisterButton = () => {
    const classes = useStyles();
    const buttonStyle = ButtonStyle();

    return (
        <Link to="/register" className={classes.link}>
            <Button
                variant="contained"
                className={buttonStyle.submitButton}
            >
                Register
            </Button>
        </Link>
    )
}

export default RegisterButton
