import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { gameHeader } from '../../hooks/admin/config';
import PaginationComponent from '../common/PaginationComponent';
import TableComponent from '../common/TableComponent';
import Alert from 'react-bootstrap/Alert';
import useAdmin from '../../hooks/admin/useAdmin';
import { addGame } from '../../fetchers/fetchers';
import { gameMapper } from '../../hooks/admin/util';
import useAdminStart from '../../hooks/admin/useAdminStart';
import FormAddGame from './FormAddGame';

const GamesComponent = () => {
  const {queryGames, queryTeams} = useAdminStart();
  const {data: teams} = queryTeams;
  const {
    data,
    currentPage, 
    handlePageChange, 
    paginationLengthRef, 
    show,
    showEdit,
    setShowEdit,
    handleClose, 
    handleShow,           
    handleAdd,
    handleOnChangeForm,
    handleEdit,
    error, 
    handleRemove,
    handleOnChangeFormEdit,
} = useAdmin(queryGames, gameMapper,addGame);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <h3>lista De Equipos</h3>
            </Col>
            <Col></Col>
            <Col>
            <Button variant="primary" onClick={handleShow}>Agregar</Button>
            </Col>
          </Row>
        </Card.Title>
        {
          (data && data.length) &&
          <TableComponent 
            headerData={gameHeader} 
            bodyData={data} 
            handleEdit={handleEdit} 
            handleRemove={handleRemove} 
            showEdit={showEdit} 
            setShowEdit={setShowEdit}
            handleChangeEdit={handleOnChangeFormEdit} />
        }
        {
          ( data && data.length > 0 && paginationLengthRef && paginationLengthRef.current >1) &&
            <PaginationComponent currentPage={currentPage} paginationLength={Math.ceil(paginationLengthRef.current)} handlePageChange={handlePageChange} />
          
        }
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddGame handleOnchange={handleOnChangeForm} teams={teams} />
          {
            error && <Alert variant='danger'>{error}</Alert>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Entrar
          </Button>
          
        </Modal.Footer>
      </Modal>
        
        
      </Card.Body>
    </Card>  
  );
};

export default GamesComponent;