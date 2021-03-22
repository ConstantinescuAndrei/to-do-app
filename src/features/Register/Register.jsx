import React, { useState, useEffect } from 'react';
import { Button, Grid, Paper, TextField, Typography, Avatar, CssBaseline } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style/index';
import buttonStyles from '../../core/buttons/buttonsStyles/buttonStyles';

const Register = () => {
    const classes = useStyles();
    const buttonStyle = buttonStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [alert, setAlert] = useState({ severity: '', message: '' });
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const userState = useSelector(state => state.user);

    const handleAlertClose = () => {
        setAlert({ severity: '', message: '' });
    } 

    const registerHandle = (e) => {
        e.preventDefault();
        const temporalyV = user;

        async function fetchUser() {
            await dispatch(signUp(temporalyV));   
        }
        fetchUser();
    }

    useEffect(() => {
        if(userState.error) {   
            setAlert({ severity: "error", message: userState.error});
        } 
    }, [userState.error])

    useEffect(() => {
        if(userState.user.firstName) {
            history.push('/');
        }
    }, [userState.user])
    return (
        <Grid container component="main" className={classes.gridRoot}>
            <CssBaseline />
            <Grid item sm={false} md={7} className={classes.imageStyle} />
            <Grid item sm={12} md={5} component={Paper} className={classes.gridSignIn} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required 
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="fname"
                                onChange={(e) => setUser({...user, firstName: e.target.value})}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required 
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setUser({...user, lastName: e.target.value})}
                            />
                        </Grid>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required 
                            fullWidth 
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus 
                            onChange={(e) => setUser({...user, username: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth 
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus 
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required 
                            fullWidth 
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />                    
                    </Grid>
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="contained"
                        color="primary"
                        className={buttonStyle.submitButton}
                        onClick={registerHandle}
                    >
                            Sign up
                    </Button>  
                    {
                        alert.severity ? (
                            <Alert variant="outlined" severity={alert.severity} onClose={handleAlertClose}>
                                {alert.message}
                            </Alert>
                        ) : ''
                    }                                     
                </div>             
            </Grid>     
        </Grid>
    )
}

export default Register
