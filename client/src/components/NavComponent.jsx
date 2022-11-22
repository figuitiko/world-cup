import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';
import context from '../context/context';
import useLogin from '../hooks/forms/useLogin';

const NavComponent = () => {
  const {logout} = useLogin();     
   const theContext = useContext(context);
   const {user} = theContext;
   const { isLogged, roles} = user;
   
   
  return (    
    <Nav className='flex-column' defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Link className='text-light' to='/'>Home</Link>

      </Nav.Item>
      {
        isLogged &&
        <Nav.Item as="li">
          <Link className='text-light' to='/dashboard'>Dashboard</Link>

        </Nav.Item>
      }
       {
        roles && roles.includes('admin') &&
        <Nav.Item as="li">

        <Link className='text-light' to='/admin'>Admin</Link>

      </Nav.Item>
      }
      {
        !isLogged &&
        <Nav.Item as="li">

          <Link className='text-light' to='/login'>Entrar</Link>

        </Nav.Item>
      }
      {
        !isLogged &&
        <Nav.Item as="li">

          <Link className='text-light' to='/register'>Registrarse</Link>

        </Nav.Item>
      }
     
      {
       isLogged &&
        <Nav.Item as="li" onClick={logout} >

          <span className='text-light' style={{ textDecoration: 'underline', cursor: 'pointer' }}  >Salir</span>

        </Nav.Item>
      }
    </Nav>    
  )
}

export default NavComponent