import React from 'react'
import Nav from './../components/Nav';
import NavUser from './../components/NavUser';


function Home({users}) {

   


  return (
    <div>
        <h1>Bienvenue sur la page Home</h1>
        <NavUser users={users}/>
        <Nav/>
       
    </div>
  )
}

export default Home