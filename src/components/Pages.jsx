import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Admin_panel from './Admin_panel'
import Web_based from './Web_based'
const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/adminpanel' element={<Admin_panel/>}></Route>
            <Route path='/webbased' element={<Web_based/>}></Route>
        </Routes>
    </div>
  )
}

export default Pages