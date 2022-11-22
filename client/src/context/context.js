import { createContext } from 'react'


export const initialState = {  
  user: {
    name: '',
    email: '',
    isLogged: false,
    roles:[]
  },
  setUser: () => {},  
  
}

const context = createContext();

export default context