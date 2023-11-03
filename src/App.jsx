import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Promotion from './pages/Promotion';
import Market from './pages/Market';
import Account from './pages/Account';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EditProfile from './pages/EditProfile';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trade' element={<Trade />} />
        <Route path='/promotion' element={<Promotion />} />
        <Route path='/agent' element={<Trade />} />
        <Route path='/market' element={<Market />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editProfile' element={<EditProfile />} />

      </Routes>
    </>
  )
}