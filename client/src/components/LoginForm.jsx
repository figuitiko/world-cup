import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import useLogin from '../hooks/forms/useLogin';
// import useLogin from '../hooks/forms/useLogin';
import context from '../context/context';
import { useContext } from 'react';




const LoginForm = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const theContext = useContext(context);
  //  console.log( 'theContext,',theContext);
  const {loginMutation, error} = useLogin();
  
  // const { data} = useLogin();
  // console.log('data', data);
  const onSubmit = (data) =>{
      
    loginMutation.mutate(data); 
    loginMutation.isSuccess && console.log('theContext in success',theContext);
   
  } 

  // const {data, error, isLoading, isError} =useLogin();
  return (
    <Card body style={{ width: '50%' }}>
      {
        
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control  {...register("email", { required: true })} type="email" placeholder="Entre su correo Electrónico" />
              {errors.email?.type === 'required' && <p role="alert">Correo requerido</p>}
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control {...register("password")} type="password" placeholder="Contraseña" />
            </Form.Group>           
            <Button variant="primary" type="submit">
              Entrar
            </Button>
            {
              error && <p role="alert" className='alert alert-danger mt-1' >Error al iniciar sesión </p>
            }
          </Form>

      }
          </Card>
  )
}

export default LoginForm