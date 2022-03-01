import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ItemsContainer from './components/ItemsContainer';
import { verifyUser } from './services/users';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=> {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  },[])

  const logout = async () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }
  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path='/' element={<Home currentUser={currentUser}/>} />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path='/register' element={<Register setCurrentUser={setCurrentUser}/>} />
        <Route path='/items/*' element={<ItemsContainer currentUser={currentUser} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
