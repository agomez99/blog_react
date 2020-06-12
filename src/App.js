import React from 'react';
import './App.css';
import Homepage from './pages/HomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Navbar';

function App() {
  return (

    <Router>
      <div className="App">
      <Navbar />
        <div id="page-body">
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/articles-list" component={ArticlesListPage} exact />
          <Route path="/article/:name" component={ArticlePage} exact />
        </div>
      </div>

    </Router>

  );
}

export default App;
