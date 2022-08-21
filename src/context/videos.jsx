import React, {createContext, useState} from 'react';



export const VideoPlayerContext = createContext({
   vidId: '',
   defualttActiveVid: true,
   activeVidHandler: () => {}  
})



export const VideoPlayerProvider = ({children})=> {
    
    const [vidId, setActiveVidId] = useState(null)
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