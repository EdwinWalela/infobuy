import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Axios from 'axios';
import './App.css';

import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import SearchPage from './components/search/SearchPage';

class App extends Component {

    state = {
        query:"",
        results:[]
    }

    fetchResults = async (query) =>{
        let res = await Axios.get(`https://info-buy.herokuapp.com/api/v1/spider?q=${query}&limit=10`);
        this.setState({
            results:res.data.data
        })
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" render={()=>
                        <Landing fetchResults={this.fetchResults}/>
                    } />
                    <Route path="/search" render={()=>
                        <SearchPage 
                            products={this.state.results}
                            fetchResults={this.fetchResults}
                        />
                    } />
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;
