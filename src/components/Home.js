import React from 'react'
import Feed from './Feed'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const Home = () => {
    return (<div>
      <div className='main'>
        <LeftSideBar />
        <Feed />
        <RightSideBar/>
      </div>
  </div>
  )
}

export default Home