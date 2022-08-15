import React from "react";
import tw from "twin.macro";
import { RiYoutubeFill, RiYoutubeLine } from "react-icons/ri";

const VideosList = ({ list }) => {
  console.log(list)
  return (
    <aside tw="h-[80vh] overflow-y-scroll  w-1/3 rounded-lg bg-secondary">
      {list.map((item) => (
        <div tw="py-5 px-10 hover:text-green-300 hover:bg-gray w-full flex items-center justify-between">
          <i>
            <RiYoutubeLine siz={"1.5rem"} />
          </i>
          <h4 tw="mr-6 w-48">{item.snippet.title}</h4>
          <p tw="text-base text-green-200">{item.snippet.resourceId.duration}</p>
        </div>
      ))}
    </aside>
  );
};

export default VideosList;
