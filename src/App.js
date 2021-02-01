import React from 'react';
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
    // USING JSON FILE
    this.setState({countries: countries})

    // TODO: FETCH INFO FROM API (BONUS)
    // fetch(`https://countries.tech-savvy.tech/countries`)
    //   .then((result) => {
    //     return result.json();
    //   })
    //   .then((data) => {
    //     this.setState({countries: data.results});
    //   })
    //   .catch((err)=>(err))
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
              <Route exact path='/:id' component={CountryDetails}/>
            </div>
          </div>          
        </div>
      </div>
    );    
  }
}

export default App
