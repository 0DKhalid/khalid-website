import React, {useContext} from 'react';
import tw from 'twin.macro'
import { VideoPlayerContext } from '../context';

const DescriptionBox = ({playlistItems})=> {

    const {vidId} = useContext(VideoPlayerContext)

    const currentVid = playlistItems.filter((item) => item.snippet.resourceId.videoId === vidId)

  
    return <article style={{width:640}} tw='bg-secondary overflow-hidden ml-20 my-10 py-10 px-5 rounded-lg'>
        {currentVid.map((item) => {
            const filterADescriptionText = item.snippet.description.replace(`/\n`, '<br>')
            const urlPattren= `\(https?:\/\/[^ ]*)\g`
            const url = filterADescriptionText.match(urlPattren)
   
            
        return  <p tw='text-center' key={item.snippet.resourceId.videoId}>{item.snippet.description ? filterADescriptionText : 'لا يوجد وصف '}</p>  
            
        })}
    </article>
}



export default DescriptionBox