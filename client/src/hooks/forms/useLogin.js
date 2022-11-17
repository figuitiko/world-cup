import { useContext } from 'react';
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
  const loginMutation = useMutation(fetchLogin, {
    onSuccess: (data) => {
      const { user:UserData, token } = data;
      const {name, email} = UserData;
      setUser({ ...user, name, email, isLogged: true });
      localStorage.setItem('token', token);
      localStorage.setItem('name',name );
      localStorage.setItem('email', email);
      navigate('/');
    },
  });
  const logout = () => {
    console.log('on logout',localStorage.getItem('token'));
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    // ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
    navigate('/login');
};
  
  return { loginMutation, logout };
}


export default useLogin;
