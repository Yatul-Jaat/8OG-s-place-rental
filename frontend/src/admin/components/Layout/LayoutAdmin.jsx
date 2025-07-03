import React from 'react'
import { Outlet } from 'react-router'
import NavbarAdmin from '../navigation_bar/NavbarAdmin'

const LayoutAdmin = () => {
  return (
    <div>
        <NavbarAdmin/>
        <Outlet/>
    </div>
  )
}

export default LayoutAdmin