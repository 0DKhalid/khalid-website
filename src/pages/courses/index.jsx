import React from "react";
import tw, { styled } from "twin.macro";
// import { AiFillCheckCircle } from "react-icons/ai";
import { graphql } from "gatsby";

// styled components

const CardWrapper = styled.article`
  box-shadow: -4px 19px 52px -11px rgba(229, 49, 112, 0.41);

  ${tw`max-w-sm rounded-lg`};
`;

const CardImage = tw.img`rounded-t-lg object-cover w-full h-48`;

const CardContentWrapper = tw.div`p-5`;

const CardTitle = tw.h5`mb-2 text-2xl font-bold tracking-tight text-white `;
const CardText = tw.p`mb-3 font-normal text-gray`;

const CardFooterWrapper = tw.div`flex py-4 px-2 justify-between items-center`;

const Courses = ({ data }) => {
  return (
    <section tw='py-20'>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <header tw='text-center py-10'>
        <h1 tw='text-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </header>
      <div tw='grid grid-cols-3 gap-4 m-6'>
        {data.playlists.nodes.map((playlist) => {
          return (
            <CardWrapper key={playlist.id}>
              <CardImage src={playlist.thumbnail} />
              <CardContentWrapper>
                <CardTitle>{playlist.title}</CardTitle>
                <CardText>{playlist.description}</CardText>
              </CardContentWrapper>
              <CardFooterWrapper>
                <p tw='text-green-300 text-sm '>completed</p>
                <p tw='text-sm text-red-100'>2h</p>
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
      }
    }
  }
`;

export default Courses;
