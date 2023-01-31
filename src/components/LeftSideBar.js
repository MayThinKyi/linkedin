import React from 'react'
import bg from '../images/sideBar__bg.png'
const LeftSideBar = () => {
    return (<div className='left__sideBar'>
        <div className='profile__container'>
            <img src={bg} alt='background' />
            <div className='profile__bottom'>
                <p className='username'>Testing</p>
                <p className='user__gmail'>user@gmail.com</p>
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
      <div className='recent__container'>
          <p className='recent'>Recent</p>
          <div>
              <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>react.js</b>
              </div>
              <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>programming</b>
              </div>
               <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>computer science</b>
              </div>
               <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>javascript</b>
              </div>
               <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>software engineer</b>
              </div>
               <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
                  <b className='hash'>#</b><b>coding</b>
              </div>
              <hr></hr>
              <p className='discover'>Discover more</p>
          </div>
          </div>
    </div>
  )
}

export default LeftSideBar