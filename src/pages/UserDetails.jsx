import React from 'react'
import {useParams, Link} from 'react-router-dom'

function UserDetails({users}) {

  const id  = parseInt(useParams().id);

  const user = users.find(user => user.id === id);


  return (
    <div>
        <h1>Page detail de l'utilisateur</h1>
        <h2>Je m'appelle {user.name} {user.lastName} et je suis {user.job}</h2>

        <Link to="/">Return</Link>
    </div>
  )
}

export default UserDetails