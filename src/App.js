import React from 'react';
// import axios from 'axios';
import './App.css';

import {Route} from 'react-router-dom'

// COMPONENTS
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import countries from './countries.json'

class App extends React.Component {

  state= {
    countries: []
  }

  getCountries = () => {
    // * USING JSON FILE
    this.setState({countries: countries})

    // TODO: FETCH INFO FROM API (BONUS) => API NOT WORKING
    // fetch("https://countries.tech-savvy.tech/countries")
    // .then(result => result.json())
    // .then(data => this.setState({countries: data}))
    // .catch(err => (err))

    // TODO: AXIOS GET INFO FROM API (BONUS) => API NOT WORKING
    // const api = axios.create({
    //   baseURL: "https://countries.tech-savvy.tech/countries"
    // })

    // api.get("/")
    //   .then(res => this.setState({countries: res.data}))
    //   .catch(err => err)
  }

  componentDidMount() {
    this.getCountries()
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-5 countries-col'>
              <CountriesList countries={this.state.countries}/>              
            </div>
            <div className='col-7'>
              <Route path='/:id' render={(props) =>
                (<CountryDetails {...props} countries={this.state.countries} />)}
              />
            </div>
          </div>          
        </div>
      </div>
    );    
  }
}

export default App
