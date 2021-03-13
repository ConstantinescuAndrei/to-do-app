import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography, Avatar, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Alert } from '@material-ui/lab';
import { grey, lime } from '@material-ui/core/colors';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { signIn } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        height: "100vh"
    },
    gridSingUp: {
        backgroundColor: grey[200]
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
        },
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
        },
        "&:active": {
            backgroundColor: theme.palette.error.main
        }
    }    
}))

const Register = () => {
    const classes = useStyles();
    const registerLink = "http://localhost:5000/auth/register";
    const [alert, setAlert] = useState({severity: '', message: ''});
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const submitHandle = (e) => {
        e.preventDefault();
        const temporalyV = user;

        async function register() {
            const response = await axios.post(registerLink, temporalyV);

            console.log(response);
            dispatch(signIn(response.data));

            if(response.data.registered) {
                setAlert({severity: "success", message: "Account has been created with success!!!"})
            }
            if(!response.data.registered) {
                setAlert({severity: "error", message: "An accout with your username or email is already created!!!"})
            }
        }

        register();
    }

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
                    <Grid container item xs={12}>
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
                                style={{marginRight: "0.5px"}}
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
                                style={{marginLeft: "0.5px"}}
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
                        className={classes.submitButton}
                        onClick={submitHandle}
                    >
                            Sign up
                    </Button>                                      
                </div>
                {
                    alert.severity ? (
                        <Alert variant="outlined" severity={alert.severity}>
                            {alert.message}
                        </Alert>
                    ) : ""
                }  
            </Grid>     
        </Grid>
    )
}

export default Register
