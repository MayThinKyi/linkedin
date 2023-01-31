import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
const InputContainer = () => {
    return (<div className='input__container'>
        <div className='input'>
            <CreateIcon/>
            <input placeholder='Start a post'/>
        </div>
        <div className='input__optionsContainer'>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <InsertPhotoIcon className='photo' />
                <p>Photo</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <SubscriptionsIcon className='video' />
                <p>Video</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <CalendarMonthIcon className='event' />
                <p>Event</p>
            </IconButton>
            </div>
            <div  className='input__options'>
                  <IconButton className='icon__button'>
                <ArticleIcon className='article' />
                <p>Write Article</p>
            </IconButton>
          </div>

        </div>
        
  </div>
  )
}

export default InputContainer