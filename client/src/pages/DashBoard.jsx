import React from 'react'
import { useContext } from 'react'
import context from '../context/context'

export const DashBoard = () => {
  const theContext = useContext(context);
  
  return (
    <div>DashBoard</div>
  )
}
