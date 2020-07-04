import React from 'react'

function NavBar() {
    return (
        <nav className="navigation grid">
        <h1>Nikola Ristic</h1>
        <ul>
          <li><a href="#portfolio" className='navlink'>Project</a></li>
          <li><a href="#contact" className='navlink'>Contact</a></li>
        </ul>
      </nav>
    )
}

export default NavBar
