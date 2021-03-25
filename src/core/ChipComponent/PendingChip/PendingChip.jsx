import React from 'react'
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import amber from '@material-ui/core/colors/amber';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const useStyles = makeStyles({
    chip: {
        backgroundColor: amber[400]
    }
})

const PendingChip = () => {
    const classes = useStyles();

    return (
        <Chip 
            className={classes.chip}
            color="inherit" 
            icon={<QueryBuilderIcon />}
            label="Pending"
        />
    )
}

export default PendingChip
