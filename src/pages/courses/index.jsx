import React from "react";
import { graphql, navigate } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";
// styled components

const CardWrapper = styled.article`
  ${tw`max-w-sm z-10  bg-secondary shadow-lg  rounded-lg flex-row  justify-center`}
`;

const CardImage = tw(GatsbyImage)`w-auto cursor-pointer h-full z-0`;

const CardContentWrapper = tw.div`p-5 cursor-pointer `;

const CardTitle = tw.h6`mb-2 font-bold  tracking-tight text-white `;
const CardText = tw.p` mt-3 font-normal text-gray`;

const CardFooterWrapper = tw.div`flex py-3 px-2 justify-between items-center`;

const Courses = ({ data }) => {
  return (
    <section tw="py-10">

      <div tw="py-10 grid  grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 content-start place-items-center gap-4 m-6">
        {data.playlists.nodes.map((playlist) => {
          //the line of code down is dirty and not the final soluation
          const isCourseNotComplete = playlist.title.includes("git");
          return (
            <CardWrapper
              onClick={() => navigate(playlist.coursePath)}
              key={playlist.id}
            >
              <div tw="min-w-[100%] text-center mt-4">
                <GatsbyImage
                  image={playlist.thumnailData.childImageSharp.gatsbyImageData}
                  alt={playlist.title}
                  tw="rounded-lg z-0  w-[90%] cursor-pointer "
                  objectFit='cover'
                />
              </div>

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
