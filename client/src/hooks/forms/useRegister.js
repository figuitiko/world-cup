import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../../fetchers/fetchers"



const useRegister = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);

 const registerMutation = useMutation(fetchRegister, {
    onSuccess: (data) => {
      if(data ) {
        console.log(data)
        navigate('/login');
      }else{        
        setError(true);       
        setTimeout(() => {setError(null)}, 3000);
      }
    },
 });

 return { registerMutation, error };
}

export default useRegister