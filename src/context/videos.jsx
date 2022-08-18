import React, {createContext, useState} from 'react';



export const VideoPlayerContext = createContext({
   vidId: '',
   activeVidHandler: () => {}  
})



export const VideoPlayerProvider = ({children})=> {
    
    const [vidId, setActiveVidId] = useState(null)

    const activeVidHandler = (vidId)=> {
        setActiveVidId(vidId)  
    }

    return <VideoPlayerContext.Provider value={{
        vidId,
        activeVidHandler,
    }}>{children}</VideoPlayerContext.Provider>
}
export default VideoPlayerProvider;