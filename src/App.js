import React from 'react';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import  RegisterForm from'./components/RegisterForm'
import Movie from './components/Movie'
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
      <Route path='/movies/:movie_type/:page' exact component={MovieList}/>
      <Route path='/movie/:id' exact component={Movie}/>
      <Route path='/login' exact component={LoginForm}/>
      <Route path='/register' exact component={RegisterForm}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
