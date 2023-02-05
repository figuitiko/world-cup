import CurrentGameComponent from '../components/home/CurrentGameComponent';
import { useContext } from 'react';
import context from '../context/context';


const Home = () => {  
  const theContext = useContext(context);
  console.log('theContext', theContext);
  return (
    <>     
      <main className='d-flex p-2 justify-content-center'>
        <CurrentGameComponent />
      </main>
    </>
  )
}

export default Home;