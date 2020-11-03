import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume'


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/resume' component={Resume}></Route>
      </Switch>
     </Router>
    </>
  );
}

export default App;
