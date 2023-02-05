import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

const PaginationComponent = ({currentPage, paginationLength, handlePageChange}) => {

	const paginationItems = [];
	for(let i = 1; i <= paginationLength; i++){
		paginationItems.push(
			<Pagination.Item key={i} active={i === currentPage} onClick={()=>handlePageChange(i)} >
				{i}
			</Pagination.Item>
		);
	}
	return (
		<Pagination>{paginationItems}</Pagination>
	);
};

PaginationComponent.propTypes = {
	currentPage: PropTypes.number.isRequired,
	paginationLength: PropTypes.number.isRequired,
	handlePageChange: PropTypes.func.isRequired
};

export default PaginationComponent;