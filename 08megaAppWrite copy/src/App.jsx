import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import './index.css';
import {login, logout} from './store/authSlice'
import {Header, Footer} from './component'
import authService from './appWrite/auth';

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(true)

  useEffect(() => {
    setLoading(true); // Start loading before the API call

    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData})) // ek object ke ander data pass
      }
      else{
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false)) // Stop loading after the API call is done
  },[])

  return !loading ? ( // ydi Loading nhi hui, to is content ko return krao.
    <div className='min-h-screen flex-flrx-wrap content-between bg-grey-400'>
    <div className='w-full block'>
    <Header />
    <main>
      todo:
    </main>
    <Footer />
    </div>
    </div>

  ) : null
}

export default App
