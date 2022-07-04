import React from "react";
import tw from "twin.macro";
import { RiYoutubeFill, RiYoutubeLine } from "react-icons/ri";

const VideosList = ({ list }) => {
  return (
    <aside tw="h-screen overflow-y-scroll px-10 w-1/3 border-gray rounded-lg border">
      {list.map((item) => (
        <div tw="py-5 w-[80%] flex items-center">
          <i>
            <RiYoutubeLine siz={"1.5rem"} />
          </i>
          <h4 tw="mr-6">{item.snippet.title}</h4>
        </div>
      ))}
    </aside>
  );
};

export default VideosList;
