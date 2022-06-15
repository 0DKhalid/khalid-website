import React from "react";
import { graphql } from "gatsby";

import { BsClock } from "react-icons/bs";

import { MDXRenderer } from "gatsby-plugin-mdx";
import tw, { styled } from "twin.macro";
import { MDXProvider } from "@mdx-js/react";

const H1 = tw.h1`text-3xl my-6 text-white`;

const H2 = tw.h2`text-2xl mt-8 mb-3 text-white`;
const H3 = tw.h3`text-xl font-bold mt-8 mb-3 text-white`;
const P = tw.p`text-lg  leading-8 text-gray`;
const PRE = styled.pre`
  direction: ltr;
`;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  pre: PRE,
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
        <p tw='flex justify-center items-center'>
          <BsClock style={{ marginLeft: "4px" }} />
          {data.post.timeToRead}
        </p>
      </div>
      <section tw='mx-auto mx-8 my-20 prose prose-xl min-h-screen'>
        <MDXProvider components={components}>
          <MDXRenderer>{data.post.body}</MDXRenderer>
        </MDXProvider>
      </section>
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
