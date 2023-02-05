import React, { useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import context from '../context/context';
import SideBarAdminComponent from '../components/admin/SideBarAdminComponent';


const Admin = () => {
  const theContext = useContext(context);
  const {user} = theContext;
  const {roles} = user;
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate('/login');
    }
    if( user && roles && !roles?.includes('admin')){      
      navigate('/');
    }
  
  }, [user, navigate, roles]);

  
  
  return (
    
      <Row className='justify-content-center flex-sm-column  flex-md-row flex-lg-row '>
        <Col md='1' lg='1' sm='12' className='bg-success bg-opacity-75   order-sm-2'  >
          <SideBarAdminComponent />
        </Col>
        <Col md='11' lg='11' className='py-3 order-lg-2 order-md-2'>
          <Outlet   />
        </Col>
      </Row>
    
  )
};

export default Admin;