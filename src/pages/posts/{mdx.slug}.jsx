import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import tw from "twin.macro";

const H2 = tw.h2`text-2xl text-orange my-4`;
const P = tw.p`text-base text-gray`;

const components = {
  h3: H2,
  p: P,
};

const Post = ({ data }) => {
  return (
    <div tw='py-28 mx-10'>
      <h1 tw='text-3xl border-r border-tertiary p-2 '>
        {data.post.frontmatter.title}
      </h1>
      <div tw='mx-5 my-10 text-sm font-bold text-gray flex justify-evenly w-[50%]'>
        <p>{data.post.frontmatter.date}</p>
        <p>{data.post.frontmatter.authore}</p>
        <p>{data.post.timeToRead} دقيقة</p>
      </div>

      <MDXRenderer components={components}>{data.post.body}</MDXRenderer>
    </div>
  );
};

export const query = graphql`
  query singlePost($id: String) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        authore
        date(locale: "Ar", fromNow: false, formatString: "MMMM DD, YYYY")
        title
      }
      timeToRead
      body
    }
  }
`;

export default Post;
