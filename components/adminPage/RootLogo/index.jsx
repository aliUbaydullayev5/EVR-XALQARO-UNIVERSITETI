import React from 'react'
import Container from './style.js'
import NavBar from '../NavBar/index.jsx'

export const RootAdmin = ({ children }) => {
  return (
    <Container >
      <NavBar />
      {children}
    </Container>
  )
}
export default RootAdmin