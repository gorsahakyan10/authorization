import React from 'react'
import { useNavigate } from 'react-router-dom';

function useRedirect(user = { id: undefined }, submited) {
    const navigate = useNavigate();
    const { id } = user;

    if(submited.defaultValue === false) {
       return 
    }

    if(id === undefined){
       navigate('/registration');
    }else{
       navigate(`/user/${id}`)
    }
}

export default useRedirect