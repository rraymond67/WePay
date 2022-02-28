import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/login';
import Navbar from './components/Navbar';
import ItemsContainer from './components/ItemsContainer';
import { verifyUser } from './services/users';

function App() {

  const [currentUser, setCurrentuser] = useState(null)

  useEffect(()=> {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentuser(user)
    }
    getUser()
  })

  const logout = async () => {
    localstorage.removeItem('authToken')
    setCurrentuser(null)
  }
  
}

export default App;
