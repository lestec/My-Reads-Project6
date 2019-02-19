import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './components/MainPage';
//helpFrom https://reacttraining.com/react-router/web/api/Route/component
import SearchPage from './components/SearchPage';


class BooksApp extends React.Component {
  render() {
    /*adding in here for 2 pages*/
    /*changing route adding search route*/
    return (
		<div>
		  <Route exact path="/" component={ MainPage } />
		  <Route exact path="/search" component={ SearchPage } />
        </div>  
      );    
  }
}

export default BooksApp
