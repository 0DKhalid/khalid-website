import React, { useContext, useState } from "react";
import tw,{ styled } from "twin.macro";
import { RiYoutubeFill, RiYoutubeLine } from "react-icons/ri";
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'

// import { PlaylistToolTipe } from ".";
import {VideoPlayerContext}  from "../context";


const ItemList = styled.dev`
${tw`py-5 px-10  cursor-pointer w-full flex items-center justify-between`}
${props => props.activeVid === props.vidId ? tw`text-green-300`: props.firstVidId === props.vidId && props.defualtVid ? tw`text-green-300`:''}
`
const PlaylistContainer = styled.aside`  
${tw`h-[90vh] overflow-y-scroll  rounded-lg bg-secondary lg:block`}
${props => props.showPlaylist ? tw`fixed` : tw`hidden`}
`

const VideosList = ({ list, firstVidId }) => {
  const {vidId,defualttActiveVid, activeVidHandler} = useContext(VideoPlayerContext)
  const [showPlaylist, setShowPlaylist] = useState(false)
  
  return (
    <div>
      <button onClick={() => setShowPlaylist(prev => !prev)} tw="mx-5 p-3 rounded-full fixed bg-secondary shadow-lg lg:hidden">
        {
          !showPlaylist ? 
          <AiOutlineMenuUnfold size={30}/>:  <AiOutlineMenuFold size={30}/>
        }
      </button> 
 
    <PlaylistContainer showPlaylist={showPlaylist}>
      
      {list.map((item) => (
        <ItemList firstVidId={firstVidId} defualtVid={defualttActiveVid} activeVid={vidId} vidId={item.snippet.resourceId.videoId
        } onClick={()=> {
          setShowPlaylist(false)
          activeVidHandler(item.snippet.resourceId.videoId)
        }
      } 
        key={item.snippet.resourceId.videoId}>
          <i>
            <RiYoutubeLine siz={"1.5rem"} />
          </i>
          <h4 tw="mr-6 w-48">{item.snippet.title}</h4>
          <p tw="text-xs">{item.snippet.resourceId.duration}</p>
        </ItemList>
    ))}
    </PlaylistContainer>
    </div>
  );
};

export default VideosList;
