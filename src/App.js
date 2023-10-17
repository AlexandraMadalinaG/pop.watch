import React from 'react';
import './App.css';
import { HomePage } from './home/HomePage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { SinglePage } from './components/single-page/SinglePage';
import SignUp from './components/signup/SignUp';
import { Movies } from './components/movies/Movies';

function App() {
  return (
      <>
          <Router>
              <Header />
              <Switch>
                  <Route exact path="/pop.watch" component={HomePage} />
                  <Route exact path="/home" component={HomePage} />
                  <Route exact path="/singlepage/:id" component={SinglePage} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/movies" component={Movies} />
              </Switch>
              <Footer />
          </Router>
      </>
  );
}

export default App;
