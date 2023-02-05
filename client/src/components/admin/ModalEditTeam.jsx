import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormAddTeamComponent from './FormAddTeamComponent';

const ModalEditTeam = ({id, show, handleCloseEdit, handleEdit, handleChangeEdit, type, data}) => {
  
	const getModal = (type) => {
		switch (type) {
			case 'team':
				return <FormAddTeamComponent handleOnchange={handleChangeEdit} valueData={data} />;				
			case 'game':
				return <FormAddTeamComponent handleOnchange={handleChangeEdit} valueData={id} />;			
			default:
				return null;
		}
	}

  return (
    <Modal show={show} onHide={handleCloseEdit}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{getModal(type)}
					
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleCloseEdit}>
            Close
					</Button>
					<Button variant='primary' onClick={()=>{
						handleEdit(id, type);
						handleCloseEdit();
					}}>
            Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
  );
};

export default ModalEditTeam;