import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import LoginButton from '../../buttons/LoginButton/LoginButton';
import RegisterButton from '../../buttons/RegisterButton/RegisterButton';
import LogoutButton from '../../buttons/LogoutButton/LogoutButton';

const useStyles = makeStyles({
    headerStyle: {
        display: 'flex'
    }
})

const DesktopHeader = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user.user);

    return (        
        <>
            {
                !user.username ? (
                    <Box className={classes.headerStyle}>
                        <LoginButton />
                        <RegisterButton />
                    </Box>
                ) : (
                    <LogoutButton />
                )
            }
        </>
    )
}

export default DesktopHeader
