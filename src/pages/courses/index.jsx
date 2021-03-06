import React from "react";
import { graphql, navigate } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

// styled components

const CardWrapper = styled.article`
  ${tw`max-w-sm rounded-lg bg-secondary`}
`;

const CardImage = tw(GatsbyImage)`w-full h-auto z-0 rounded-t-lg`;

const CardContentWrapper = tw.div`p-5`;

const CardTitle = tw.h5`mb-2 text-lg font-bold tracking-tight text-white `;
const CardText = tw.p` mt-3 font-normal text-gray`;

const CardFooterWrapper = tw.div`flex py-3 px-2 justify-between items-center`;

const Courses = ({ data }) => {
  return (
    <section tw="py-20">
      <header tw="text-center py-10">
        <h1 tw="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </header>
      <div tw="py-16 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 content-start place-items-center gap-4 m-6">
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
  query PlayLists {
    playlists: allYtbPlayList(sort: { fields: publishedAt }) {
      nodes {
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
