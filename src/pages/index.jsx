import * as React from "react";
import { graphql, Link } from "gatsby";
import { BsArrowLeft, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import tw from "twin.macro";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <pre tw='text-white'>{JSON.stringify(data, null, 4)}</pre>
      <header tw='py-48 text-center'>
        <h1 tw='text-5xl mb-8 text-white'>welcome to my page</h1>
        <p tw='text-gray'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iure
          dolorum deleniti provident magnam sint.
        </p>
        <div tw=' flex justify-center items-center text-gray mt-8'>
          <a href='#' tw='hover:text-tertiary'>
            <BsGithub size='1.6rem' />
          </a>

          <a href='#' tw='hover:text-tertiary'>
            <BsLinkedin
              size='1.6rem'
              style={{ marginLeft: 25, marginRight: 25 }}
            />
          </a>
          <a href='#' tw='hover:text-tertiary'>
            <BsYoutube size='1.6rem' />
          </a>
        </div>
      </header>
      {/* Posts list */}

      <section tw='pt-20 pb-10'>
        <h1 tw='text-5xl text-center mb-16'>My posts</h1>
        {data.posts.nodes.map((post) => (
          <article tw='py-6 px-10 mx-20  mb-20 text-center border-b border-gray'>
            <h1 tw='text-xl font-bold py-10'>{post.frontmatter.title}</h1>
            <p tw='text-gray'>{post.excerpt}</p>
            <div tw='flex text-gray justify-between items-center pt-6'>
              <div tw='flex-col justify-center items-center'>
                <p tw='text-sm py-4'>{post.frontmatter.date}</p>
                <h4 tw='text-sm bg-tertiary text-white px-3 rounded-full font-bold'>
                  {post.frontmatter.authore}
                </h4>
              </div>
              <p tw='text-tertiary'>
                <Link to={`/posts/${post.slug}`}>
                  <BsArrowLeft size='1.7rem' />
                </Link>
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export const query = graphql`
  query allPosts {
    posts: allMdx {
      nodes {
        excerpt(pruneLength: 250, truncate: true)
        frontmatter {
          title
          date(locale: "Ar", formatString: "YYYY DD, MMMM")
          authore
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
