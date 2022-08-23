import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Apropos from './pages/Apropos';
import UserDetails from './pages/UserDetails';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([
    {
        id: 1,
        name : "Kouyate",
        lastName : "Karim",
        job : "teacher"
    },
    {
        id: 2,
        name : "Fode",
        lastName : "Doumbia",
        job : "student"
    },
    {
        id: 3,
        name : "Affali",
        lastName : "Stephane",
        job : "student"
    }

])


  return (
   <Routes>
      <Route path="/" element={<Home users={users}/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/apropos" element={<Apropos/>}/>
      <Route path="/user/:id" element={<UserDetails users={users}/>}/>
   </Routes>
  );
}

export default App;
