import React,{useContext} from 'react'
import { VideoPlayerContext } from '../context'
import Youtube from 'react-youtube'





const VideoPlayer = () => {
    const {vidId} = useContext(VideoPlayerContext)
    return <Youtube videoId={vidId} opts={{width:500, hieght:450}}></Youtube>
}

export default VideoPlayer