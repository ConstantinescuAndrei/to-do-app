import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Paper, TextField, Typography, CssBaseline, Avatar } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/styles';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import grey from '@material-ui/core/colors/grey';
import lime from '@material-ui/core/colors/lime';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/actions';
import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    gridRoot: {
        height: "100vh",
    },
    gridSignIn: {
        backgroundColor: grey[200],
    },
    imageStyle: {
        backgroundImage: "url(https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing("25vh", 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing("25vh", "20vh")
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: grey[300],
        color: theme.palette.primary[700],
    },
    submitButton: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "10px",
        backgroundColor: lime[500],
        '&:hover': {
            backgroundColor: theme.palette.primary[500],
            border: '0.5px solid rgb(0, 255, 0)',
            boxShadow: '10px 10px 10px rgba(0, 255, 0, 0.3)',
            border: '0.5px solid rgb(0, 255, 0)',
            transform: "translateY(-2.5px)",
            transition: "0.5s",
        }
    }
}))

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const loginLink = "http://localhost:5000/auth/login";
    const [alert, setAlert] = useState({ severity: '', message: '' })
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const loginHandle = (e) => {
        e.preventDefault();
        const temporalyV = user;
        console.log(user);

        async function login() {
            const response = await axios.post(loginLink, temporalyV);

            console.log(response.data);
            if(response.data.validUser) {
                dispatch(signIn(response.data.user));
                setAlert({ severity: "success", message: "Login succesfull!!"});
            }
            else {
                setAlert({ severity: "error", message: "Username or password are wrong!!"});
            }
        }

        login();
    }

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
                        className={classes.submitButton}
                        onClick={loginHandle}
                    >
                            Sign in
                    </Button>
                    {
                        alert.severity ? (
                            <Alert variant="outlined" severity={alert.severity}>
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
