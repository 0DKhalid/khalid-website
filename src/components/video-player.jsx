import React,{useContext} from 'react'
import {DescriptionBox} from './'
import { VideoPlayerContext } from '../context'
import Youtube from 'react-youtube'
import tw from 'twin.macro'

const VideoPlayer = ({firstVidId, playlistItems}) => {
    const {vidId} = useContext(VideoPlayerContext)
    const activeVidId = vidId ? vidId : firstVidId;
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        },
      };

    return<>
    <Youtube videoId={activeVidId} opts={opts} ></Youtube>
    <DescriptionBox playlistItems={playlistItems}/>
    </> 
}

export default VideoPlayer    