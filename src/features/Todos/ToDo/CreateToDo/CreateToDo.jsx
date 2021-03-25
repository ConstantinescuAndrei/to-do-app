import React, { useState } from 'react';
import { Grid, Box, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ButtonStyle from '../../../../core/buttons/buttonsStyles/buttonStyles';
import cyan from '@material-ui/core/colors/cyan';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[50],
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        padding: "15%",
        borderRadius: "15%",
        boxShadow: "10px 5px 5px rgb(100, 100, 100)",
        backgroundColor: cyan[50]
    },
    textfield: {
        color: cyan[800],
    },
    typography: {
        marginBottom: "5%",
        borderBottom: "1px solid black"
    }
}))

const CreateToDo = () => {
    const classes = useStyles();
    const buttonStyle = ButtonStyle();

    return (
        <Grid container>
            <Grid item xs={1} md={2} />
                <Grid item sm={10} md={8} className={classes.root}>
                    <Box className={classes.box}>
                        <Typography variant="h4" className={classes.typography}>Create a new Todo</Typography>
                        <TextField 
                            className={classes.textfield}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth 
                            id="title"
                            label="Title"
                            name="title"
                            autoComplete="title"
                            autoFocus 
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth 
                            id="content"
                            label="Content"
                            name="content"
                            autoComplete="content"
                            autoFocus 
                        />
                        <Button
                            className={buttonStyle.submitButton}
                        >
                            Create
                        </Button>
                    </Box>
                </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
    )
}

export default CreateToDo
