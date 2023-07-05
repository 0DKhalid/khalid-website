import { graphql } from "gatsby";
import React from "react";
import { VideosList,  VideoPlayer } from "../../components";
import tw from "twin.macro";   
import  { VideoPlayerProvider } from '../../context';


const Course = ({ data }) => {
  const playlistItems = data.course.playlist.items;
   const firstVidId =playlistItems[0].snippet.resourceId.videoId


  return (
    <VideoPlayerProvider>
    <section tw="py-10 text-gray flex container">
      <VideosList firstVidId={firstVidId}  list={playlistItems} />  
      <section tw='flex-col flex-auto mx-5  justify-center items-center overflow-hidden '>
      <VideoPlayer firstVidId={firstVidId} playlistItems={playlistItems} />  
     
      </section>

      
    </section>
  </VideoPlayerProvider>
  );
  //  <pre>{JSON.stringify(data.course.playlist.items, null, 4)}</pre>;
};

export const query = graphql`
  query Course($id: String) {
    course: ytbPlayList(id: { eq: $id }) {
      playlist {
        items {
          snippet {
            description
            title
            resourceId {
              videoId
              duration
            }
          }
        }
      }
    }
  }
`;

export default Course;
