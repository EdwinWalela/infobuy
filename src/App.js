import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import SearchPage from './components/search/SearchPage';

function App() {
  return (
    <div className="App">
        <Router>
           <Route exact path="/" component={Landing} />
           <Route path="/search" component={SearchPage} />
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
