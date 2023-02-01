import React from 'react'

const RecentOption = ({title}) => {
  return ( <div className='recent__options' style={{display:'flex',alignItems:'center'}}>
      <b className='hash'>#</b><b>{title}</b>
              </div>
  )
}

export default RecentOption