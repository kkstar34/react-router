import React from 'react'
import {Link} from 'react-router-dom'
function Nav({users}) {
  return (
    <nav>
            <ul>
                
                <li><Link to="/">Accueil</Link> </li>

                <li><Link to="/detail">Detail</Link></li>

                <li><Link to="/apropos">A propos</Link></li>
            </ul>
        </nav>
  )
}

export default Nav