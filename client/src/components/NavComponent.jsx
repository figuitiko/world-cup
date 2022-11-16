import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';

const NavComponent = () => {
  return (    
    <Nav className='flex-column' defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Link to='/'>Home</Link>

      </Nav.Item>
      <Nav.Item as="li">

        <Link to='/login'>Entrar</Link>

      </Nav.Item>
    </Nav>    
  )
}

export default NavComponent