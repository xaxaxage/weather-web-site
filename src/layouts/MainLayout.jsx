import React from 'react'
import { Outlet } from 'react-router'
import Menu from '../components/main-page/menu/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout