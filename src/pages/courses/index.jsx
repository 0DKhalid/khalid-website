import React from "react";
import { graphql, navigate } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

// styled components

const CardWrapper = styled.article`
   border: 1px solid #2ECAA8;
  ${tw`max-w-sm rounded-lg bg-transparent flex justify-center`}
`;

const CardImage = tw(GatsbyImage)` cursor-pointer h-auto z-0 rounded-lg`;

const CardContentWrapper = tw.div`p-5 cursor-pointer`;

const CardTitle = tw.h5`mb-2 text-lg font-bold tracking-tight text-white `;
const CardText = tw.p` mt-3 font-normal text-gray`;

const CardFooterWrapper = tw.div`flex py-3 px-2 justify-between items-center`;

const Courses = ({ data }) => {
  return (
    <section tw="py-20">
      
      <div tw="py-10 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 content-start place-items-center gap-4 m-6">
        {data.playlists.nodes.map((playlist) => {
          //the line of code down is dirty and not the final soluation
          const isCourseNotComplete = playlist.title.includes("git");
          return (
            <CardWrapper
              onClick={() => navigate(playlist.coursePath)}
              key={playlist.id}
            >
              <CardImage
                image={playlist.thumnailData.childImageSharp.gatsbyImageData}
                alt={playlist.title}
              />
              <CardContentWrapper>
                <CardTitle>{playlist.title}</CardTitle>
                <CardText>{playlist.description}</CardText>
              <CardFooterWrapper>
                <p
                  css={[
                    tw`text-sm`,
                    isCourseNotComplete ? tw`text-red-300` : tw`text-green-300`,
                  ]}
                >
                  {isCourseNotComplete ? "غير مكتملة" : "مكتملة"}
                </p>
                <p tw="text-green-200">{playlist.playlist.totalTime}</p>
              </CardFooterWrapper>
              </CardContentWrapper>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  query PlayLists {
    playlists: allYtbPlayList(sort: { fields: publishedAt }) {
      nodes {
        playlist{
          totalTime
        }
        description
        title
        thumbnail
        id
        coursePath: gatsbyPath(filePath: "/courses/{ytbPlayList.title}")
        thumnailData {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    
  }
`;

export default Courses;
