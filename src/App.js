import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { login } from './userSlice';
function App() {
  const userRedux = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
    
   dispatch(login({
      username: user.displayName,
      email: user.email,
      image:user.photoURL
    })) 
          console.log('app',user);
  } 
  
    });
  },[])
  return (
    <div className="App">
      <Header />
      {userRedux? <div className='main'>
        <LeftSideBar />
        <Feed />
        <RightSideBar/>
      </div> : <Login/>}

     
     
    </div>
  );
}

export default App;
