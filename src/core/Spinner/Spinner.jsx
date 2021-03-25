import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    gridRoot: {
        flexGrow: "1"
    },
    divStyle: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
})

const Spinner = () => {
    const classes = useStyles();
    const userLoading = useSelector(state => state.user.loading);
    const todosLoading = useSelector(state => state.todos.loading);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if(userLoading === true || todosLoading === true) {
            setLoader(true);
        }
        if(userLoading === false && todosLoading === false) {
            setLoader(false);
        }
    }, [userLoading, todosLoading])
    return (
        <div className={classes.divStyle}>
            <ClipLoader color={'blue'} loading={loader} size={150} />
        </div>
    )
}

export default Spinner
