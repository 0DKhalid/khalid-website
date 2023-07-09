import React, {useContext} from 'react';
import  Linkify from 'linkify-react';
import { VideoPlayerContext } from '../context';
import tw,{styled} from 'twin.macro'

import './description-box.css'




const DescriptionBox = ({playlistItems})=> {

    const {vidId} = useContext(VideoPlayerContext)

    const currentVid = playlistItems.filter((item) => item.snippet.resourceId.videoId === vidId)

  
    return <article style={{whiteSpace:'pre-line'}}  tw='bg-secondary overflow-hidden  my-10 py-10 px-5 rounded-lg'>
        {currentVid.map((item) => {
        return  <Linkify  options={{target:"_blank", className:'descLink'}} tw='max-w-lg' key={item.snippet.resourceId.videoId}>{item.snippet.description ? item.snippet.description: 'لا يوجد وصف '}</Linkify>  
            
       
        })}
    </article>
}



export default DescriptionBox