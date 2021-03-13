import React from 'react';
import { AppBar, Typography, Box, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RegisterButton from './Buttons/RegisterButton/RegisterButton';
import LoginButton from './Buttons/LoginButton/LoginButton';

const useStyles = makeStyles(theme => ({
    appBarRoot: {
        flexGrow: 1
    },
    typography: {
        display: 'flex',
        flexGrow: '1',
    },
    headerStyle: {
        display: 'flex',
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBarRoot}>
            <Toolbar>
                <Typography 
                    variant="h4"
                    className={classes.typography}
                >
                    Working organizator
                </Typography>
                <Box className={classes.headerStyle}> 
                    <LoginButton />
                    <RegisterButton />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
