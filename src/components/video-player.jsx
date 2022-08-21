import React,{useContext} from 'react'
import { VideoPlayerContext } from '../context'
import Youtube from 'react-youtube'
import tw from 'twin.macro'

const VideoPlayer = ({firstVidId}) => {
    const {vidId} = useContext(VideoPlayerContext)
    const activeVidId = vidId ? vidId : firstVidId;
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        },
      };

    return <Youtube  videoId={activeVidId} opts={opts} ></Youtube>
}

export default VideoPlayer    