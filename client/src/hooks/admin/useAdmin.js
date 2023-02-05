import  { useRef, useState } from 'react';
import {useMutation} from 'react-query';
// import { addTeam, getAllTeams } from '../../fetchers/fetchers';
import { handlePaginateData } from './util';

const useAdmin = ( query, mapper, adderMutation) => {
   const [currentPage, setCurrentPage] = useState(1)
  const paginationLengthRef = useRef(null);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const query =  useQuery(getIdFetcher, getFetcher );

   let {data} = query;   
    if(data){      
      paginationLengthRef.current = Math.ceil(data.length / 10);
      data = mapper(data);
      data = handlePaginateData(data, currentPage);
      
    }

  const handlePageChange = (page) => {    
    setCurrentPage(page);
  };

  const addMutation = useMutation(adderMutation,{onSuccess: () => {    
    query.refetch();
  }});
  const handleOnChangeForm = (e) => {      
    
    if(e?.target?.name){      
      setFormData({...formData, [e.target.name]: e.target.value});
    }else{      

      //convert date to string
      const date = new Date(e);
      const dateString = date.toDateString();      
      setFormData({...formData, date: dateString});
      
    }
  };
  const handleOnChangeFormEdit = (id, type) => {
    console.log(id);
    console.log(type);
    console.log(formData);
  };

  const handleAdd = () => {   
   
     for(const key in formData){
        if(!formData[key]){
          setError('Por favor, rellene todos los campos');
          setFormData({});
          setTimeout(() => {setError(null)}, 3000); 
          return;
        }
     }
     if((formData.team1 && formData.team2 )&& formData.team1 === formData.team2){
      setError('Los equipos no pueden ser iguales');
      setFormData({});
      setTimeout(() => {setError(null)}, 3000); 
      return;
     }
     
    addMutation.mutate(formData);
    setFormData({});
    handleClose();    
  };
  const handleEdit = (id) => {
    console.log(id);
  };
  const handleRemove = (id) => {
    console.log(id);
  };

  return {data,
          currentPage, 
          handlePageChange, 
          paginationLengthRef, 
          show,
          showEdit,
          setShowEdit,
          handleClose, 
          handleShow,           
          handleAdd,
          handleOnChangeForm,
          handleOnChangeFormEdit,
          handleEdit,
          error, 
          handleRemove};  
  
}

export default useAdmin