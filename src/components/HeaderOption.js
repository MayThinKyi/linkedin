import React from 'react'

const HeaderOption = ({icon,title}) => {
    return (<div className='header__optionContainer'>
        {icon}
        <p>{title}</p>
        
  </div>
  )
}

export default HeaderOption