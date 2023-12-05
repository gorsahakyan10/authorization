import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useGetCurrentUser from './customHooks/useGetCurrentUser';

function UserProfile(props) {
  const { id } = useParams();
  const { currentUser } = useGetCurrentUser({...props.user}, id);

  return (
    <div>
        <h2>id: {currentUser.id}</h2>
        <h2>name: {currentUser.name}</h2>
        <h2>surname: {currentUser.surname}</h2>
    </div>
  )
}

export default UserProfile