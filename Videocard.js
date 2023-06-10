import React, { useRef, useState } from 'react'
import './Videocard.css'
import ReactPlayer from 'react-player'
import Videoheader from './Videoheader';
import Videofooter from './Videofooter';

function Videocard({ url, likes, shares, channel, avatarSrc, song }) {

  const [isvideoplaying, setvideoplaying] = useState(false);
  const videoRef = useRef(null);



  const onvideopress = () => {
    if (isvideoplaying === 'pause') {
      videoRef.current.pause();
      setvideoplaying(false);

    } else if (isvideoplaying === 'play') {

      videoRef.current.play();

      setvideoplaying(true);

    }

  }


  return (
    <div className="videocard">
      <Videoheader />
      <ReactPlayer
        ref={videoRef}
        onClick={onvideopress}
        className="video__player"
        url={url}
        controls={true}
      />
      <Videofooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}


      />
    </div>
  )
}

export default Videocard