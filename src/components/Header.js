import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (<div className='header'>
        <h1>Logo</h1>
        <div className='input__container'>
           <SearchIcon/>
            <input placeholder='Search' />
        </div>
  </div>
  )
}

export default Header