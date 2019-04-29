import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Bookdetails from './components/Bookdetails';
import Contact from './components/Contact';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
            <Header/>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/team' component={Team}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/book-details' component={Bookdetails}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Footer/>

            </div>
            </Router>
  );

    }
  
}

export default App;
