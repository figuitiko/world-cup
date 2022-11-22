import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import context from '../context/context';
import { useContext } from 'react';
import useRegister from '../hooks/forms/useRegister';


const RegisterFormComponent = () => {

  const { register, handleSubmit,  formState: { errors }, watch } = useForm();
  const theContext = useContext(context);

  const {registerMutation, error} = useRegister()

  const onSubmit = (data) =>{
     registerMutation.mutate(data);
  }

  return (
    <Card body style={{ width: '50%' }}>
    {
      
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control  {...register("name", { required: true })} type="text" placeholder="Entre su Nombre" />
            {errors.email?.type === 'required' && <p role="alert">Correo requerido</p>}
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control  {...register("email", { required: true })} type="email" placeholder="Entre su Correo Electrónico" />
            {errors.email?.type === 'required' && <p role="alert">Correo requerido</p>}
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control {...register("password")} type="password" placeholder="Contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
            <Form.Label>Repita Contraseña</Form.Label>
            <Form.Control {...register("confirm_password", {
              validate: (value) => value === watch('password')
            })} type="password" placeholder="Contraseña" />
            {errors.confirm_password?.type === 'validate' && <p role="alert" className='alert alert-danger mt-1'>Las contraseñas no coinciden</p>}
          </Form.Group>             
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
          {
            error && <p role="alert" className='alert alert-danger mt-1' >Error al registrarse</p>
          }
        </Form>

    }
        </Card>
  )
}

export default RegisterFormComponent