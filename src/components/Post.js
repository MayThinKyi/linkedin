import { IconButton } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import defaultProfile from '../images/defaultProfile.png'
const Post = ({username,usergmail,post,image}) => {
    return (<div className='post__container'>
        <div className='post__header'>
            <img src={image ? image : defaultProfile} />
            <div className='user__info'>
                <p>{username }</p>
                <p>{usergmail }</p>
            </div>
        </div>
        <div className='post__content'>
            <p>{post }</p>
        </div>
        <div className='post__optionsContainer'>
            
            <div className='post__option'>
                <IconButton className='icon__button'>
                     <ThumbUpIcon/>
                    <span>Like</span>
                </IconButton>
                </div>
            <div className='post__option'>
                <IconButton className='icon__button'>
                     <CommentIcon/>
                    <span>Comment</span>
                </IconButton>
                </div>
            <div className='post__option'>
                <IconButton className='icon__button'>
                     <ShareIcon/>
                    <span>Share</span>
                    </IconButton>
                </div>
            <div className='post__option'>
                 <IconButton className='icon__button'>
                     <SendIcon/>
                    <span>Send</span>
                     </IconButton>
                </div>
       
        </div>
  </div>
  )
}

export default Post