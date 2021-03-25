import React, { useState } from 'react'
import { Button, IconButton, Box, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LoginButton from '../../buttons/LoginButton/LoginButton';
import RegisterButton from '../../buttons/RegisterButton/RegisterButton';
import CreateNewTodo from '../../buttons/CreateTodoButton/CreateTodoButton';
import LogoutButton from '../../buttons/LogoutButton/LogoutButton';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    drawer: {
        width: "20%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "20%",
    },
})

const PhoneHeader = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const user = useSelector(state => state.user.user);

    const drawerHandle = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <Box>
            <IconButton
                onClick={drawerHandle}
                style={open ? {display: 'none'} : {display: 'flex'}}
            >
                <MenuIcon />
            </IconButton>
                <Drawer
                    className={classes.drawer}
                    anchor={'right'}
                    open={open}
                    onClose={drawerHandle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >                    
                    <div>
                        <Button 
                            onClick={drawerHandle}
                            startIcon={<ChevronRightIcon />}
                        >
                            Go back
                        </Button>                    
                    </div>
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: "5px"}}>
                        {
                            !user.username ? (
                                <>
                                    <LoginButton />
                                    <RegisterButton />
                                </>
                            ) : (
                                <>
                                    <CreateNewTodo />
                                    <LogoutButton />
                                </>
                            )
                        }
                    </div>
                </Drawer>          
        </Box>
    )
}

export default PhoneHeader
