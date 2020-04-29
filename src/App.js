import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './components/login-form/Loginform';
import RegisterForm from './components/register-form/RegisterForm';
import Dashboard from './components/dashboard/Dashboard';
import AddEvent from './components/add-event/AddEvent';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/home" component={Dashboard} />
      <Route path="/addevent" component={AddEvent} />
    </Switch>
    </div>
  );
}

export default App;
