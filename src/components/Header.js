import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
    return (<div className='header'>
        <div className='header__left'>
             <img src={logo} alt='linkedin_logo' />
            <div className='input__container'>
            <SearchIcon/>
                <input placeholder='Search' />
            </div> 
        </div>
        <div className='header__right'>
            <HeaderOption icon={<HomeIcon/>} title="Home" />
             <HeaderOption icon={<GroupIcon/>} title="My Network" />
             <HeaderOption icon={<WorkIcon/>} title="Jobs" />
              <HeaderOption icon={<MessageIcon/>} title="Messages" />
            <HeaderOption icon={<NotificationsIcon/>} title="Notifications" />
            <div className='header__optionContainer'>
                <img style={{marginBottom:"-5px"}} src={logo} alt='user_profie_picture' />
                <div style={{display:'flex',alignItems:'center',gap:'0'}}>
                     <p style={{marginRight:'-3px'}}>Me</p><ArrowDropDownIcon/>
               </div>
            </div>

        </div>
  </div>
  )
}

export default Header