import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import MovieList from './components/MovieList'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/>
      <Route path='/' exact component={MovieList}/>
      {/* <Route path='/movie' exact component={Movie}/> */}
    </div>
    </Router>
    </Provider>
  );
}

export default App;
