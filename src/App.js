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
        condition:"",
        loading:false
    }

    handleSearchSubmit = async(query,ignore,vendor,condition) =>{
        ignore = ignore || ""
        vendor = vendor || ""
        condition = condition || ""
        this.setState({
            ignore,
            query,
            vendor,
            condition,
            loading:true
        })
        await this.fetchResults(query,ignore,vendor,condition);
    }

    fetchResults = async (query,ignore,vendor,condition) =>{
        ignore = ignore.replace(/,/g,"+");
        let res = await Axios.get(`https://info-buy.herokuapp.com/api/v1/spider?q=${query}&limit=10&ignore=${ignore}&src=${vendor}&condition=${condition}`);
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
