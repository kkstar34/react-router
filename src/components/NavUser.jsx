import React from 'react'
import {Link} from 'react-router-dom'
function NavUser({users}) {
  return (
    <nav>
            <ul>
                {
                    users.map(user =>  <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link> </li>)
                }
            </ul>
        </nav>
  )
}

export default NavUser