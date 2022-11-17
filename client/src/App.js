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
} from 'react-query';
import HeaderComponent from './components/HeaderComponent';
import { ProtectRoutes } from './router/helper';
import { DashBoard } from './pages/DashBoard';
const queryClient = new QueryClient()
function App() {
  const { Provider } = context;
  const [user, setUser] = useState(initialState.user);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const updateUser = useCallback( ( name, email)=>{
    setUser((val)=> ({...val, name, email}));
  }, []);
  useEffect(() => {
    console.log('on app');
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    if(token && name && email){     
     updateUser(name, email)
    }    
  }, [updateUser]);

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
            <Route element={<ProtectRoutes />}>
              <Route path='/dashboard' element={<DashBoard />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
