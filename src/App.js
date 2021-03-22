import React from 'react';
import Header from './core/Header/Header';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./features/MainPage/MainPage";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: "1"
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
    </Router>
  );
}

export default App;
