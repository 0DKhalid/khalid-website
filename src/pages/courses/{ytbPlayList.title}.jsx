import { graphql } from "gatsby";
import React from "react";
import { VidoesList } from "../../components";
import Youtube from 'react-youtube'
import tw from "twin.macro";

const Course = ({ data }) => {
  const playlistItems = data.course.playlist.items;
  return (
    <section tw="py-10 text-gray flex gap-38">
      <VidoesList list={playlistItems} />
      <Youtube videoId="X-KdDeUnRU4" opts={{width:500, hieght:450}}></Youtube>
    </section>
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
