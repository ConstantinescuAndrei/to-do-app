import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography, CssBaseline, Avatar } from '@material-ui/core'; 
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../Redux/actions';
import useStyles from './style';
import buttonStyles from '../../core/buttons/buttonsStyles/buttonStyles';

const Login = () => {
    const classes = useStyles();
    const buttonStyle = buttonStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [alert, setAlert] = useState({ severity: '', message: '' })
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const error = useSelector(state => state.user.error);

    const handleAlertClose = () => {
        setAlert({ severity: '', message: '' });
    }

    const loginHandle = (e) => {
        e.preventDefault();
        const temporalyV = user;
        
        async function fetchUser() {
            await dispatch(signIn(temporalyV));
        }
        fetchUser();

        if(!error) {
            history.push('/');
        }
    }

    useEffect(() => {
        if(error) { 
            console.log(error);    
            setAlert({ severity: "error", message: error});
            console.log(alert);
        } 
    }, [error])
    return (
        <Grid container item className={classes.gridRoot}>
            <CssBaseline />
            <Grid item sm={false} md={7} className={classes.imageStyle} />
            <Grid item sm={12} md={5} component={Paper} className={classes.gridSignIn} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
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
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="contained"
                        color="primary"
                        className={buttonStyle.submitButton}
                        onClick={loginHandle}
                    >
                            Sign in
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

export default Login
