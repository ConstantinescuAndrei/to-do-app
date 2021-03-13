import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import red from '@material-ui/core/colors/red';
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        marginBottom: '0.5em',
        marginTop: '0.5em',
        marginLeft: '0.5em',
        borderRadius: '15px',
        backgroundColor: lime[500],
        '&:hover': {
            backgroundColor: theme.palette.primary[700],
            border: "0.5px solid rgba(0, 255, 0)",
            boxShadow: "10px 10px 10px rgba(0, 255, 0, 0.3)",
            transform: "translateY(-2.5px)",
            transition: "0.8s"
        },
        '&:active': {
            backgroundColor: red[200]
        }
    },
    link: {
        textDecoration: "none"
    }
}))

const RegisterButton = () => {
    const classes = useStyles();

    return (
        <Link to="/register" className={classes.link}>
            <Button
                variant="contained"
                className={classes.button}
            >
                Register
            </Button>
        </Link>
    )
}

export default RegisterButton
