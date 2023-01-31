import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
const RightSideBar = () => {
  return (  <div className='right__sidebar'>
          <div className='linkedin__newsContainer'>
          <div className='linkedin__newsHeader'>
               <p className='linkedin__news'>Linkedin News</p>
          <InfoIcon/>
         </div>
          <div>
               <div className='linkedin__newsOptions' >
                  <div style={{display:'flex',alignItems:'center'}}>
                      <CircleIcon/><b>Apple</b>
                  </div>
                  <small>Top News  •  156 readers</small>
              </div>
              <div className='linkedin__newsOptions' >
                  <div style={{display:'flex',alignItems:'center'}}>
                      <CircleIcon/><b>React.js</b>
                  </div>
                  <small>8h ago</small>

              </div>
                <div className='linkedin__newsOptions' >
                  <div style={{display:'flex',alignItems:'center'}}>
                      <CircleIcon/><b>Microsoft</b>
                  </div>
                  <small>1d ago</small>

              </div>
               <div className='linkedin__newsOptions' >
                  <div style={{display:'flex',alignItems:'center'}}>
                       <CircleIcon/><b>Amazon</b>
                  </div>
                  <small>3d ago</small>

              </div>
               <div className='linkedin__newsOptions'>
                  <div style={{display:'flex',alignItems:'center'}}>
                       <CircleIcon/><b>Meta</b>
                  </div>
                   <small>1w ago</small>

              </div>
              <hr></hr>
              <p className='discover'>Discover more</p>
          </div>
          </div>
    </div>
  )
}

export default RightSideBar