import React from "react";
import tw, { styled, css } from "twin.macro";
// import { AiFillCheckCircle } from "react-icons/ai";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

// styled components

const CardWrapper = styled.article`
  box-shadow: -4px 19px 52px -11px rgba(229, 49, 112, 0.41);

  ${tw`max-w-sm rounded-lg`};
`;

const CardImage = tw(GatsbyImage)`rounded-t-lg object-cover w-full h-48`;

const CardContentWrapper = tw.div`p-5`;

const CardTitle = tw.h5`mb-2 text-xl font-bold tracking-tight text-white `;
const CardText = tw.p`mb-3 mt-3 font-normal text-gray`;

const CardFooterWrapper = tw.div`flex py-4 px-2 justify-between items-center`;

const Courses = ({ data }) => {
  return (
    <section tw='py-20'>
      <header tw='text-center py-10'>
        <h1 tw='text-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </header>
      <div tw='py-16 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  gap-4 m-6'>
        {data.playlists.nodes.map((playlist) => {
          //the line of code down is dirty and not the final soluation
          const isCourseNotComplete = playlist.title.includes("git");
          return (
            <CardWrapper key={playlist.id}>
              <CardImage
                image={playlist.thumnailData.childImageSharp.gatsbyImageData}
                alt={playlist.title}
              />
              <CardContentWrapper>
                <CardTitle>{playlist.title}</CardTitle>
                <CardText>{playlist.description}</CardText>
              </CardContentWrapper>
              <CardFooterWrapper>
                <p
                  css={[
                    tw`text-sm`,
                    isCourseNotComplete ? tw`text-red-300` : tw`text-green-300`,
                  ]}
                >
                  {isCourseNotComplete ? "غير مكتملة" : "مكتملة"}
                </p>
              </CardFooterWrapper>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  query playLists {
    playlists: allYtbPlayList {
      nodes {
        description
        title
        thumbnail
        id
        thumnailData {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Courses;
