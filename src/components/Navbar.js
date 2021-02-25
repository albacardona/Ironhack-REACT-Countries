import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">Wiki Countries</a>
          <a className="btn btn-outline-light" role="button" href="https://github.com/albacardona/Ironhack-REACT-Countries" target="_blank" rel="noopener noreferrer">Check the repo</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar