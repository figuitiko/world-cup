import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';
import { GiTeamIdea, GiThreeBurningBalls } from 'react-icons/gi';

const SideBarAdminComponent = () => {
  return (
    <Nav defaultActiveKey='/home' className='flex-column vh-md-100  align-items-center flex-sm-row flex-lg-column flex-md-column gap-5 justify-content-sm-center'>
      <Nav.Item as='li'>
					<Link  className='text-light' to='/admin'><GiTeamIdea size={30} /></Link>
				</Nav.Item>
        <Nav.Item as='li'>
        
					<Link className='text-light' to='/admin/games'><GiThreeBurningBalls size={30} /></Link>
				</Nav.Item>        
    </Nav>     
  )
}

export default SideBarAdminComponent