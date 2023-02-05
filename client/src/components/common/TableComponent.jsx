import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ActionsBoxComponent from './ActionsBoxComponent';
import PropTypes from 'prop-types';
import ModalEditTeam from '../admin/ModalEditTeam';



const TableComponent = ({headerData, bodyData , handleEdit, handleRemove, showEdit, setShowEdit, handleChangeEdit, modalType}) => {  
	const [currentData ,setCurrentData] = useState({});
	const handleCloseEdit = () => setShowEdit(false);
	const handleShowEdit = (data) =>{
		setCurrentData(data);
		setShowEdit(true);
	};
	

  return (
		<Table striped bordered hover>
			<thead>
				<tr>
					{						
						(headerData && headerData.length) &&
						headerData.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{
					(bodyData && bodyData.length) && bodyData.map((row, index) => (
						
						<tr key={index}>
							{Object.keys(row).map((value, index) => {
								if (value !== 'id') {
									return <td key={index}>{row[value]}</td>
								}
								return null;
							}
							)}
							<td>
								<ActionsBoxComponent id={row.id} handleEdit={handleEdit} handleRemove={handleRemove} handleShowEdit={handleShowEdit} data={row} />									
								
							</td>
						</tr>
					))}
					<ModalEditTeam show={showEdit}  handleCloseEdit = {handleCloseEdit} handleEdit={handleEdit} handleChangeEdit={handleChangeEdit} type={modalType} data={currentData}  />
			</tbody>
		</Table>
  );
};

TableComponent.prototype = {
	headerData: PropTypes.array.isRequired,
	bodyData: PropTypes.array.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired
};

export default TableComponent;