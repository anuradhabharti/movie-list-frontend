import React from 'react';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import  RegisterForm from'./components/RegisterForm'
import Movie from './components/Movie'
import './App.css';
import MovieList from './components/MovieList'
import Watchlist from './components/Watchlist'
import SearchMovies from './components/SearchMovies'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store'
import {Provider} from 'react-redux'
import PrivateRoute from './routes/PrivateRouter'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path='/movies/:movie_type/:page' exact component={MovieList}/>
      <Route path='/movie/:id' exact component={Movie}/>
      <Route path='/login' exact component={LoginForm}/>
      <Route path='/register' exact component={RegisterForm}/>
      <Route path='/search' exact component={SearchMovies}/>
      <PrivateRoute path='/watchlist' exact component={Watchlist}/>
      <Route path='*' component={()=>'404 NOT FOUND'}/>
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
