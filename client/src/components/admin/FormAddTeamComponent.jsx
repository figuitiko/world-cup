import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';



const FormAddTeamComponent = ({handleOnchange, valueData}) => { 

  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Entra nombre del equipo</Form.Label>
        <Form.Control onChange={handleOnchange} name='name'  type="text" placeholder="Entra nombre del equipo" value={valueData ? valueData.name : ''} />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Siglas</Form.Label>
        <Form.Control onChange={handleOnchange}   name='country'  type="text" placeholder="Entre las siglas" value={valueData ? valueData.country : ''} />
      </Form.Group>    
      
    </Form>
  )
}

FormAddTeamComponent.propTypes = {
  handleOnchange: PropTypes.func.isRequired
}

export default FormAddTeamComponent