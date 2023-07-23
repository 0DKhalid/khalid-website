import * as React from "react";
import { graphql, Link } from "gatsby";
import { BsArrowLeft, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import Lottie from 'react-lottie-player'
import animationData from '../assets/46367-space-rocket.json'
import tw from "twin.macro";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      {/* <pre tw='text-white'>{JSON.stringify(data, null, 4)}</pre> */}
      <header tw='text-center' style={{position:'relative', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      
       <Lottie
       loop
       style={{overflow:'hidden',height:'90%',position:'absolute', left:0, right:0, bottom:0, top:-110, margin:'auto',zIndex:-1   }}
       animationData={animationData}
       play
       />
       <div tw="bg-black lg:w-1/3 md:w-1/2 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg shadow" style={{zIndex:1 }}>
       <h1 tw='text-5xl mb-8 text-white'>هلا والله</h1>
          
          <p tw=' text-gray'>
            <span tw="mx-1 my-0 p-0 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-orange">انا خالد</span>
            <span>
            مطور ويب وأكثر,
           أؤمن ان اسمى مراحل المعرفة هي القدرة على نشرها
            </span>
          </p>
          <div tw='flex justify-center items-center text-gray mt-8'>
            <a href='https://github.com/0DKhalid' target='_blank' tw='hover:text-tertiary'>
              <BsGithub size='1.6rem' />
            </a>
  
            <a href='https://www.linkedin.com/in/%D8%AE%D8%A7%D9%84%D8%AF-%D8%A7%D9%84%D8%A3%D8%B3%D9%85%D8%B1%D9%8A-2214651b7' target='_blank' tw='hover:text-tertiary'>
              <BsLinkedin
                size='1.6rem'
                style={{ marginLeft: 25, marginRight: 25 }}
              />
            </a>
            <a href='https://www.youtube.com/channel/UCIBfmRr16yo6gWRTh9rExIQ' target='_blank' tw='hover:text-tertiary'>
              <BsYoutube size='1.6rem' />
            </a>
          </div>
       </div>
           
      </header>
      {/* Posts list */}

      <section tw='pt-6 pb-10'>
        <h1 tw='text-5xl text-center text-lightGreen'>مقالاتي</h1>
        {data.posts.nodes.map((post) => (
          <article tw='py-6 md:w-auto mx-20  mb-20 text-center border-b border-gray'>
            <h1 tw='text-xl font-bold  py-10'>{post.frontmatter.title}</h1>
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
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
