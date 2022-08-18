import { graphql } from "gatsby";
import React from "react";
import { VideosList } from "../../components";
import tw from "twin.macro";   
import  { VideoPlayerProvider } from '../../context';
import {VideoPlayer} from '../../components'

const Course = ({ data }) => {
  const playlistItems = data.course.playlist.items;
   const fristVidId =playlistItems[0].snippet.resourceId.videoId

  return (
    <VideoPlayerProvider>
    <section tw="py-10 text-gray flex gap-36">
      <VideosList firstVidId={fristVidId} list={playlistItems} />     
      <VideoPlayer/>  
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
