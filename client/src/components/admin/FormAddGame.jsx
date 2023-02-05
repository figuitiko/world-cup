import React, { useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const FormAddGame = ({handleOnchange, teams}) => {  
  const team1Ref = useRef();
  const team2Ref = useRef();
  useEffect(() => {
    console.log(team1Ref.current.value);
    if(team1Ref.current.value === team2Ref.current.value) {
      console.log('same team');
    }
  });

  return (
    <Form >
      <Form.Group className='mb-3' controlId='formBasicTeam1'>
        <Form.Label>Entra el primer Equipo</Form.Label>
        <Form.Select aria-label='Default select example' onChange={handleOnchange} name='team1' ref={team1Ref}>
          <option>selecciona un equipo</option>
          { 
            teams.map(team => (
              <option key={team['_id']} value={team.name} name={team.name}>{team.name}</option>
            ))
          }

        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicTeam2'>
        <Form.Label>Entra el Segundo  Equipo</Form.Label>
        <Form.Select aria-label='Default select example' onChange={handleOnchange} name='team2' ref={team2Ref}>
          <option>selecciona un equipo</option>
          {
            teams.map(team => (
              <option key={team['_id']} value={team.name}  >{team.name}</option>
            ))
          }

        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
      <Calendar onChange={handleOnchange}  />        
      </Form.Group>    
      
    </Form>
  )
}

FormAddGame.propTypes = {
  handleOnchange: PropTypes.func.isRequired
}

export default FormAddGame