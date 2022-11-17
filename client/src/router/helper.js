import {  Navigate, Outlet } from 'react-router-dom';
// import { useCookies } from 'react-cookie';


export const ProtectRoutes = () => {
  // const [cookies] = useCookies();
  const token = localStorage.getItem('token');
  return token ?  <Outlet />: <Navigate to='/login' exact />
};