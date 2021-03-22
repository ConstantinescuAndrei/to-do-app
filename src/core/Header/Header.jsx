import React from 'react';
import { AppBar, Typography, Box, Toolbar, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import DesktopHeader from './DesktopHeader/DesktopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';

const useStyles = makeStyles(theme => ({
    appBarRoot: {
        flexGrow: 1
    },
    headerStyle: {
        display: 'flex'
    },
    typography: {
        color: theme.palette.primary[50],
    },
    link: {
        textDecoration: "none",        
        display: 'flex',
        flexGrow: '1'
    }
}))

const Header = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user.user);
    const theme = useTheme();
    const desktopScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <AppBar position="static" className={classes.appBarRoot}>
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography 
                        variant="h4"
                        className={classes.typography}
                    >
                        Working organizator
                    </Typography>
                </Link>
                {
                    desktopScreen ? (
                        <DesktopHeader />
                    ) : (
                        <PhoneHeader />
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header
