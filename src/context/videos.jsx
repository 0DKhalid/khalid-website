import React, {createContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';



export const VideoPlayerContext = createContext({
   vidId: '',
   defualttActiveVid: true,
   activeVidHandler: () => {}  
})



export const VideoPlayerProvider = ({children})=> {
    const {getItem} = useLocalStorage()
   
    const [vidId, setActiveVidId] = useState(getItem('activeVidId'))
    const [defualttActiveVid, setDefaultActiveVid] = useState(true)



   
    const activeVidHandler = (vidId)=> {
        setDefaultActiveVid(false)
        setActiveVidId(vidId)  
    }

    return <VideoPlayerContext.Provider value={{
        vidId,
        defualttActiveVid,
        activeVidHandler,
    }}>{children}</VideoPlayerContext.Provider>
}
export default VideoPlayerProvider;