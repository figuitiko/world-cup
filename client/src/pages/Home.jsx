import React from 'react'
 import HeaderComponent from '../components/HeaderComponent';
     
import CurrentGameComponent from '../components/CurrentGameComponent';

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <main className='d-flex p-2 justify-content-center'>
        <CurrentGameComponent />
      </main>
    </>
  )
}

export default Home;