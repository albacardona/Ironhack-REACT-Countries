import React from 'react'
import {Link} from 'react-router-dom'

class CountriesList extends React.Component {

  render () {
    return (
      <div className="CountriesList">
        <div className="list-group">
          {this.props.countries.map((country, idx) => (
            <Link to={country.cca3} key={idx} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
          ))}
        </div>
      </div>
    )
  }
}

export default CountriesList