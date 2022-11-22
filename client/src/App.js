import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import context,{initialState}  from './context/context';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import {  
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import HeaderComponent from './components/HeaderComponent';
import { ProtectRoutes } from './router/helper';
import { DashBoard } from './pages/DashBoard';
import Admin from './pages/Admin';
import Register from './pages/Register';
const queryClient = new QueryClient()
function App() {
  const { Provider } = context;
  const [user, setUser] = useState(initialState.user);
  
  const value = useMemo(() => ({ user, setUser,  }), [user, setUser]);
  const updateUser = useCallback( ( name, email, roles)=>{    
    setUser((val)=> ({...val, name, email, roles, isLogged: true}));
  }, []);
  
   const checkUser = useCallback( async ()=>{
    const token = localStorage.getItem('token');
    if(token){
      try {
        const response = await fetch('/api/users/checkUser', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token
          } 
        });
        const data = await response.json();
        
         updateUser(data.name, data.email, data.roles);        
      } catch (error) {
        console.log(error);
      }

   }
  }, [updateUser]);
  

  useEffect(() => {    
    checkUser();
  }, [checkUser]);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Provider value={value}>  
        <QueryClientProvider client={queryClient}>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectRoutes />}>
              <Route path='/dashboard' element={<DashBoard />} />
            </Route>
            <Route element={<ProtectRoutes />}>
              <Route path='/admin' element={<Admin />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
