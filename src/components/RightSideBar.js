import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
import NewsOption from './NewsOption';
const RightSideBar = () => {
  return (  <div className='right__sidebar'>
          <div className='linkedin__newsContainer'>
          <div className='linkedin__newsHeader'>
               <p className='linkedin__news'>Linkedin News</p>
          <InfoIcon/>
         </div>
          <div>
              <NewsOption title={'Apple'} subtitle={'Top News  •  156 readers'} />
             <NewsOption title={'React.js'} subtitle={'8h ago'} />
             <NewsOption title={'Microsoft'} subtitle={'1d ago'} />
             <NewsOption title={'Amazon'} subtitle={'3d ago'} />
             <NewsOption title={'Meta'} subtitle={'1w ago'} />
              <hr></hr>
              <p className='discover'>Discover more</p>
          </div>
          </div>
    </div>
  )
}

export default RightSideBar