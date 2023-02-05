
import { useQuery } from 'react-query';

import { getAllGames, getAllTeams } from '../../fetchers/fetchers';


const useAdminStart = () => {  
  


  const queryTeams =  useQuery('allTeams', getAllTeams );
  
  
  const queryGames = useQuery('allGames', getAllGames);
  
  
  
  
  return {queryTeams, queryGames };
}

export default useAdminStart