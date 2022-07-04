import { graphql } from "gatsby";
import React from "react";
import { VidoesList } from "../../components";
import tw from "twin.macro";

const Course = ({ data }) => {
  const playlistItems = data.course.playlist.items;
  return (
    <section tw="py-10 text-gray flex">
      <VidoesList list={playlistItems} />
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
            }
          }
        }
      }
    }
  }
`;

export default Course;
