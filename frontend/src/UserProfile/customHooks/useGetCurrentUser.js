import { useEffect, useState } from "react";

function useGetCurrentUser(user, id) {
    const  [currentUser, setCurrentUser] = useState({...user}); 

    useEffect(() => {
        fetch('http://localhost:8000/user', {
           method: 'POST',
           body: JSON.stringify({ id })
        }).then((resp) => resp.json())
          .then((currentUser) => setCurrentUser(currentUser))
      }, [])

      return { currentUser }
}

export default useGetCurrentUser