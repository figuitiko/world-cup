import React from 'react'
import { useContext } from 'react'
import context from '../context/context'

export const DashBoard = () => {
  const thecontext = useContext(context);
  console.log(thecontext);
  return (
    <div>DashBoard</div>
  )
}
