import { createContext } from 'react'


export const initialState = {  
  user: {
    name: '',
    email: '',
    isLogged: false,
    roles:[]
  },
  teams: [],
  games: [],
  setUser: () => {}, 
  setTeams: () => {},
  setGames: () => {},
  
}

const context = createContext();

export default context