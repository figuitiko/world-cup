import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Figure from 'react-bootstrap/Figure';
import PropTypes from 'prop-types';

const LogoBox = ({img}) => {
	return (
		<Container>
			<Row>
				<Figure>
					<Figure.Image
						width={171}
						height={180}
						alt='logo'
						src={img}
					/>
				</Figure>
			</Row>
		</Container >
	);
};


LogoBox.propTypes = {
	img: PropTypes.string.isRequired
};

export default LogoBox;