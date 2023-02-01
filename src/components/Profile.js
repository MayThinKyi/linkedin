import React from 'react'
import defaultProfile from '../images/defaultProfile.png'

const Profile = ({bg,img,username,usergmail}) => {
  return ( <div className='profile__container'>
            <img src={bg} alt='background' className='bg' />
            <div className='profile__bottom'>
                <img src={img ? img : defaultProfile } className='profile__pic' />
          <p className='username'>{username}</p>
          <p className='user__gmail'>{ usergmail}</p>
                <div className='account__info'>
                    <p className='title'>Who viewed you</p>
                    <p className='number'>2,543</p>
                </div>
                <div className='account__info'>
                    <p className='title'>Views on Post</p>
                    <p className='number'>2,448</p>
                </div>

            </div>
      </div>
  )
}

export default Profile