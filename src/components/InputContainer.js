import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
const InputContainer = () => {
  const [post, setPost] = useState('');
  const createPost = async(e) => {
    e.preventDefault();
    const data={
      post: post,
      userId: auth?.currentUser.uid,
      username: auth?.currentUser.displayName,
      usergmail: auth?.currentUser.email,
      userImg:auth?.currentUser.photoURL,
      timestamp:serverTimestamp()
    }
    const dbRef = collection(db, 'posts');
      await addDoc(dbRef, data).then(docRef => {
          setPost('')
         
})
.catch(error => {
    console.log(error);
})
  }
    return (<div className='input__container'>
        
        <form onSubmit={createPost}>
        <div className='input'>
           <CreateIcon/>
          <input onChange={(e)=>setPost(e.target.value)} value={post} placeholder='Start a post' />
          </div>
            </form>
        
        <div className='input__optionsContainer'>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <InsertPhotoIcon className='photo' />
                <p>Photo</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <SubscriptionsIcon className='video' />
                <p>Video</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <CalendarMonthIcon className='event' />
                <p>Event</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <ArticleIcon className='article' />
                <p>Write Article</p>
            </IconButton>
          </div>

        </div>
        
  </div>
  )
}

export default InputContainer