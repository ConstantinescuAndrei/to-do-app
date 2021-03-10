import React from 'react';
import Header from './components/Header/Header';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';
import Login from './containers/Login/Login';

const useStyles = makeStyles(theme => ({
  gridRoot: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: lime[300]
    }
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridRoot}>
      <Grid item xs={12}>
          <Header />
      </Grid>
      <Login />
    </Grid>
  );
}

export default App;
