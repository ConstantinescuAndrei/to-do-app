import React from 'react';
import Header from './core/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./features/MainPage/MainPage";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import CreateTodo from './features/Todos/ToDo/CreateToDo/CreateToDo';
import Spinner from './core/Spinner/Spinner';

function App() {

  return (
    <Router> 
      <Spinner />     
      <Header />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/create-todo" exact component={CreateTodo} />
      </Switch>
    </Router>
  );
}

export default App;
