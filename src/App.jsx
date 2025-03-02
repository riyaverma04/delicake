

import { Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Start'
import UserSignUp from './pages/UserSignUp'
import UserLogin from './pages/userLogin'
import Start from './pages/Start'
import UserHome from './pages/UserHome'
import Explore from './pages/Explore'
import Layout from './components/Layout'
import UserProfile from './pages/UserProfile'

function App() {
 

  return (
    <>
    
   <Routes>
    <Route path='/user-signup' element={<UserSignUp/>}/>
    <Route path='/user-login' element={<UserLogin/>}/>
    <Route path='/' element={<Layout/>}>
   <Route path="/user-profile" element={<UserProfile/>}/>
    
    <Route path='/users-home' element={<UserHome/>}/>
    <Route path='/explore-cakes' element={<Explore/>}/>
    
    </Route>
    <Route  index element={<Start/>}/>
    
   </Routes>
   
    </>
  )
}

export default App
