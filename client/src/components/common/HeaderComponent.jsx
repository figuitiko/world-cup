import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import NavComponent from './NavComponent';
import LogoBox from './LogoBox';
import logo from '../../assets/img/logo.png';

const HeaderComponent = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	return (
		<header className='bg-success bg-opacity-75 p-4'>
			<Container>
				<Row>
					<Col>
						<LogoBox img={logo} />
					</Col>
					<Col className='justify-content-end d-flex align-items-start'>
						<Button variant='secondary'  onClick={() => setOpen(!open)}   aria-controls='example-collapse-text'  aria-expanded={open}>              
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-list' viewBox='0 0 16 16'>
								<path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
							</svg>
						</Button>
					</Col>

				</Row>
				<Row>

					<Collapse in={open}>
						<div id='example-collapse-nav'>
							<NavComponent handleOpen={handleOpen} />
						</div>
					</Collapse>
				</Row>
			</Container>
		</header>
    
	);
};

export default HeaderComponent;