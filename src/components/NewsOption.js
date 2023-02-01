import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

const NewsOption = ({title,subtitle}) => {
  return (<div className='linkedin__newsOptions' >
                  <div style={{display:'flex',alignItems:'center'}}>
          <CircleIcon /><b>{ title}</b>
                  </div>
      <small>{ subtitle}</small>
              </div>
  )
}

export default NewsOption