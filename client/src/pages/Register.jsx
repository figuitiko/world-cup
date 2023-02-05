import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import RegisterFormComponent from '../components/login-register/RegisterFormComponent';

const Register = () => {
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <RegisterFormComponent />
      </Row>
    </Container>
  )
}

export default Register;