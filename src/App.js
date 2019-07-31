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
        results:[],
        loading:false
    }

    handleSearchSubmit = async(query) =>{
        this.setState({
            query,
            loading:true
        })
        await this.fetchResults(query);
    }

    fetchResults = async (query) =>{
        let res = await Axios.get(`https://info-buy.herokuapp.com/api/v1/spider?q=${query}&limit=10`);
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
                        <Landing fetchResults={this.fetchResults}/>
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
