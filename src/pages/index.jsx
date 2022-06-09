import * as React from 'react';
import { BsArrowLeft, BsYoutube, BsLinkedin, BsGithub } from 'react-icons/bs';
import tw from 'twin.macro';

// markup
const IndexPage = () => {
  return (
    <>
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
        <h1 tw='text-5xl text-center mb-10'>My posts</h1>
        <article tw='py-10 border-b border-gray  px-10 mx-20 text-center'>
          <h1 tw='text-xl font-bold py-6'>whats web development</h1>
          <p tw='text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            atque vero suscipit doloremque provident maiores impedit iste beatae
            temporibus soluta? Laudantium delectus consectetur corrupti incidunt
            unde eveniet, in illo accusamus?
          </p>
          <div tw='flex text-gray justify-between items-center pt-10'>
            <p tw='text-sm'>2020/1</p>
            <div tw='flex text-white w-2/12 text-sm justify-between items-center'>
              <p>tag1</p>
              <p>tag2</p>
              <p>tag3</p>
            </div>
            <p tw='text-tertiary'>
              <BsArrowLeft size='1.7rem' />
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default IndexPage;
