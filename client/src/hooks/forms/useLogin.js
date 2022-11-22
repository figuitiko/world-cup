import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import context from '../../context/context';
import { fetchLogin } from '../../fetchers/fetchers';
import { useNavigate } from 'react-router-dom';

// import { useCookies } from 'react-cookie';


const useLogin = () => {
  const theContext = useContext(context);
  const navigate = useNavigate();
  // const [ setCookies, removeCookie] = useCookies();
  const { user, setUser } = theContext;
  const [error, setError] = useState(null);
  const loginMutation = useMutation(fetchLogin, {
    onSuccess: (data) => {
      if(data && data.token) {
        console.log(data);
        const { user:UserData, token } = data;
        const {name, email, roles} = UserData;
        setUser({ ...user, name, email, isLogged: true, roles });
        localStorage.setItem('token', token);        
  
        navigate('/');

      }else{
        setError(data);
        navigate('/login');
        setTimeout(() => {setError(null)}, 3000);
      }
      

    },
    onError: (error) => {
      console.log(error);
    },
  });
  const logout = () => {
    console.log('on logout',localStorage.getItem('token'));
    localStorage.removeItem('token');
    setUser({ ...user, name: '', email: '', isLogged: false, roles: [] });  

    // ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
    navigate('/login');
};
  
  return { loginMutation, logout, error };
}


export default useLogin;
