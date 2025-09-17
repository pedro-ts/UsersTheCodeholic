import React from 'react'
import { Navigate, Outlet } from 'react-router-dom' //renderiza o filho
// context
import { useStateContext } from '../../context/ContextProvider'

const DefaultLayout = () => {
  const {user, token} = useStateContext();
  if (!token){ //se não tiver token(não logado) ir para login (todos com DefaultLayout)
    return <Navigate to="/login"/>
  }

  return (
    <div>
      DefaultLayout
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
