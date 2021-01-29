import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'

// COMPONENTS
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import countries from './countries.json'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-5 countries-col'>
              <CountriesList countryList={countries}/>              
            </div>
            <div className='col-7'>
              <Route path='/:id' component={CountryDetails}/>
            </div>
          </div>          
        </div>
      </div>
    );    
  }
}

export default App;
