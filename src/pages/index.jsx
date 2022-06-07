import * as React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import tw from 'twin.macro';

// markup
const IndexPage = () => {
  return (
    <header tw='py-44 text-center'>
      <h1 tw='text-5xl mb-8 text-white'>welcome to my page</h1>
      <p tw='text-gray'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iure
        dolorum deleniti provident magnam sint.
      </p>
      <div tw=' flex justify-center items-center text-white  mt-8'>
        <a href='#'>
          <FaGithub size='1.7rem' />
        </a>
        <a href='#'>
          <FaLinkedin
            size='1.7rem'
            style={{ marginLeft: 25, marginRight: 25 }}
          />
        </a>
        <a href='#'>
          <FaYoutube size='1.8rem' />
        </a>
      </div>
    </header>
  );
};

export default IndexPage;
