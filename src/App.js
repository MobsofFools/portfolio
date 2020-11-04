import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume'
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/projects' component={Projects}></Route>
      </Switch>
      <Footer />
     </Router>     
    </>
  );
}

export default App;
