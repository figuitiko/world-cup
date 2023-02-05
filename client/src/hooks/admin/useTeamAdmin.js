import  { useRef, useState } from 'react';
import {useMutation, useQuery} from 'react-query';
import { addTeam, getAllTeams } from '../../fetchers/fetchers';
import { handlePaginateData } from './util';

const useTeamAdmin = () => {
   const [currentPage, setCurrentPage] = useState(1)
  const paginationLengthRef = useRef(null);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({name: '', country: ''});
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const query =  useQuery('allTeams', getAllTeams );
   
  let {data} = query;
    if(data){      
      paginationLengthRef.current = Math.ceil(data.length / 10);
      data = data.map(item=>({id: item['_id'], name: item.name, country: item.country}));
      data = handlePaginateData(data, currentPage);
      
    }

  const handlePageChange = (page) => {    
    setCurrentPage(page);
  };

  const addTeamMutation = useMutation(addTeam,{onSuccess: (data) => {
    console.log(data);
    query.refetch();
  }});
  const handleOnChangeFormTeam = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleAddTeam = () => {
    console.log('formData', formData);
    console.log(formData);
    if(!formData.name || !formData.country){
      setError('Por favor, rellene todos los campos');
      setTimeout(() => {setError(null)}, 3000);      
    }else{
      addTeamMutation.mutate(formData);    
      handleClose();
    }
  };
  const handleEditTeam = (id) => {
    console.log(id);
  };
  const handleRemoveTeam = (id) => {
    console.log(id);
  };

  return {data,
          currentPage, 
          handlePageChange, 
          paginationLengthRef, 
          show, 
          handleClose, 
          handleShow,           
          handleAddTeam,
          handleOnChangeFormTeam,
          handleEditTeam,
          error, 
          handleRemoveTeam};  
  
}

export default useTeamAdmin