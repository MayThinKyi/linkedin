import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import InputContainer from './InputContainer'
import Post from './Post'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      let newPosts = [];

     const getDocsFun = async () => {
         const q = query(collection(db, "posts"),orderBy('timestamp','desc'));

                const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
      
        newPosts.push(doc.data())
});
                       setPosts(newPosts)
                      
                } 
                getDocsFun()
  },[posts])
  return (<div className='feed__container'>
    <InputContainer />
   
    {posts && posts.map((p) => {
          return <Post username={p.username} usergmail={p.usergmail} post={p.post} image={p.userImg}  />

    })

    }
  </div>
  )
}

export default Feed