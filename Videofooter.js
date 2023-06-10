import React from 'react'
import './Videofooter.css'
import {Button,Avatar} from "@material-ui/core"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Videofooter({channel,song,likes,shares,avatarSrc}) {
  return (
    <div className='videofooter'>
        <div className='videofooter__text'>
        <Avatar src={avatarSrc}></Avatar>
        <h3>
            {channel}.<Button>Follow</Button>
        </h3>
        </div>
        <div className='videofooter__ticker'>
            <MusicNoteIcon/>
           

        </div>
        <div className='videofooter__actions'>
            <div className='videofooter__actionsleft'>
                <FavoriteIcon fontSize="large"/>
                <ModeCommentIcon fontSize="large"/>
                <SendIcon fontSize="large"/>
                <MoreHorizIcon fontSize="large"></MoreHorizIcon>

            </div>
            <div className='videofooter__actionsright'>
                <div className='videofooter__stat'>
                    <FavoriteIcon/>
                    <p>{likes}</p>
                      </div>
                      <div className='videofooter__stat'>
                        <ModeCommentIcon/>
                        <p>{shares}</p>
                      </div>


            </div>
        </div>
        

    </div>
  )
}

export default Videofooter