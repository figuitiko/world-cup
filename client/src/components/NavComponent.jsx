import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';
import useLogin from '../hooks/forms/useLogin';

const NavComponent = () => {
  const {logout} = useLogin();  
   const token = localStorage.getItem('token');
   console.log(token);
  return (    
    <Nav className='flex-column' defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Link className='text-light' to='/'>Home</Link>

      </Nav.Item>
      {
        token &&
        <Nav.Item as="li">
          <Link className='text-light' to='/dashboard'>Dashboard</Link>

        </Nav.Item>
      }
      {
        !token &&
        <Nav.Item as="li">

          <Link className='text-light' to='/login'>Entrar</Link>

        </Nav.Item>
      }
      {
        token &&
        <Nav.Item as="li" onClick={logout} >

          <span className='text-light' style={{ textDecoration: 'underline', cursor: 'pointer' }}  >Salir</span>

        </Nav.Item>
      }
    </Nav>    
  )
}

export default NavComponent