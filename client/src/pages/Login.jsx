import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import LoginForm from '../components/login-register/LoginForm';
import { useContext } from 'react';
import context from '../context/context';





const Login = () => {
  const theContext = useContext(context);
  console.log(theContext);
  
  return (    
      <Container>
        <Row className='justify-content-center mt-5'>        
          <LoginForm />          
        </Row>
      </Container>    
  )
}

export default Login;