import React from 'react'
import SidebarAdmin from '../setting/sidebarMenu/index.jsx'
import Container from './style.js'

export const RootSidebarMenu = ({ children }) => {
  return (
    <Container>
      <SidebarAdmin />
      {children}
    </Container>
  )
}

export default RootSidebarMenu