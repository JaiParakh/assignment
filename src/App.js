import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './components/login-form/Loginform';
import RegisterForm from './components/register-form/RegisterForm';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </Switch>
    </div>
  );
}

export default App;
