import React from 'react'
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    chip: {
        backgroundColor: green[400]
    }
})

const CompleteChip = () => {
    const classes = useStyles();

    return (
        <Chip 
            className={classes.chip}
            color="inherit" 
            icon={<CheckIcon />}
            label="Complete"
        />
    )
}

export default CompleteChip
