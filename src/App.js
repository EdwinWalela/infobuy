import React from 'react';
import './App.css';

import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import SearchPage from './components/search/SearchPage';

function App() {
  return (
    <div className="App">
        {/* <Landing /> */}
        <SearchPage />
        <Footer />
    </div>
  );
}

export default App;
