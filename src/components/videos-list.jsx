import React, { useContext } from "react";
import tw,{ styled } from "twin.macro";
import { RiYoutubeFill, RiYoutubeLine } from "react-icons/ri";
// import { PlaylistToolTipe } from ".";
import {VideoPlayerContext}  from "../context";


const ItemList = styled.dev`
${tw`py-5 px-10  cursor-pointer w-full flex items-center justify-between`}
${props => props.activeVid === props.vidId ? tw`text-green-300`: props.fristVidId === props.activeVid && tw`text-green-300`}
`

const VideosList = ({ list }) => {
  const {vidId, activeVidHandler} = useContext(VideoPlayerContext)
  // console.log(vidId)
  return (
    <aside tw="h-[80vh] overflow-y-scroll  w-1/3 rounded-lg bg-secondary">
      {list.map((item) => (
        <ItemList  activeVid={vidId} vidId={item.snippet.resourceId.videoId
        } onClick={()=> activeVidHandler(item.snippet.resourceId.videoId)} key={item.snippet.resourceId.videoId}>
          <i>
            <RiYoutubeLine siz={"1.5rem"} />
          </i>
          <h4 tw="mr-6 w-48">{item.snippet.title}</h4>
          <p tw="text-xs">{item.snippet.resourceId.duration}</p>
        </ItemList>
    ))}
    </aside>
  );
};

export default VideosList;
