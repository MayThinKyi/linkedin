import React from 'react'
import bg from '../images/sideBar__bg.png'
import logo from '../images/logo.png'
import Profile from './Profile'
import RecentOption from './RecentOption'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
const LeftSideBar = () => {
      const user=useSelector((state)=>state.user.value)

    return (<div className='left__sideBar'>
       <Profile bg={bg} img={user?.image} username={auth?.currentUser.displayName} usergmail={user?.email} />
      <div className='recent__container'>
          <p className='recent'>Recent</p>
          <div>
             <RecentOption title={'react.js'} />
            <RecentOption title={'programming'} />
             <RecentOption title={'computer science'} />
             <RecentOption title={'software engineer'} />              
              <hr></hr>
              <p className='discover'>Discover more</p>
          </div>
          </div>
    </div>
  )
}

export default LeftSideBar