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
        ignore:"",
        results:[],
        loading:false
    }

    handleSearchSubmit = async(query,ignore,vendor) =>{
        this.setState({
            ignore,
            query,
            vendor,
            loading:true
        })
        await this.fetchResults(query,ignore,vendor);
    }

    fetchResults = async (query,ignore,vendor) =>{
        ignore = ignore.replace(/,/g,"+");
        let res = await Axios.get(`https://info-buy.herokuapp.com/api/v1/spider?q=${query}&limit=10&ignore=${ignore}`);
        this.setState({
            results:res.data.data,
            loading:false
        })
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" render={()=>
                        <Landing 
                            handleSearchSubmit={this.handleSearchSubmit}
                        />
                    } />
                    <Route path="/search" render={()=>
                        <SearchPage 
                            loading={this.state.loading}
                            products={this.state.results}
                            handleSearchSubmit={this.handleSearchSubmit}
                        />
                    } />
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;
