import React from 'react';
import Header from './components/Header/Header';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./containers/Menu/Menu";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: "1"
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={12}>
            <Header />
        </Grid>
          <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
      </Grid>
    </Router>
  );
}

export default App;
