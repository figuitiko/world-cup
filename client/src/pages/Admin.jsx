import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import context from '../context/context'

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
  
  }, [user, navigate, roles])
  
  return (
    <div>Admin</div>
  )
};

export default Admin;