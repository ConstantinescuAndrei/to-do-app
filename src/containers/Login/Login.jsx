import React from 'react';
import { Button, Grid, Paper, TextField, Typography, CssBaseline, Avatar } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import grey from '@material-ui/core/colors/grey';
import lime from '@material-ui/core/colors/lime';

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
        margin: theme.spacing("15vh", 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus 
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
                    />
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                    >
                            Sign in
                    </Button>
                </div>
            </Grid>     
        </Grid>
    )
}

export default Login
