import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useGetCurrentUser from './customHooks/useGetCurrentUser';
import { LanguageContext } from '../App';

function UserProfile(props) {
  const { t } = useContext(LanguageContext); 

  const { id } = useParams();
  const { currentUser } = useGetCurrentUser({...props.user}, id);

  return (
    <div>
        <h2>id: {currentUser.id}</h2>
        <h2>{t('Name')}: {currentUser.name}</h2>
        <h2>{t('Surname')}: {currentUser.surname}</h2>
        <h2>{t('Username')}: {currentUser.username}</h2>
    </div>
  )
}

export default UserProfile