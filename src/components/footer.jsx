import React from "react";
import {
  AiFillCopyrightCircle,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import tw from "twin.macro";

const Footer = () => {
  return (
    <footer>
      <div tw='w-full mt-8'>
        <a
          href='https://github.com/0DKhalid'
          tw='flex justify-center gap-2 items-center text-gray'
        >
          خالد
          <AiFillCopyrightCircle />
          <span>جميع الحقوق محفوظة</span>
        </a>

        <div tw='flex justify-center items-center p-5 gap-2 text-gray'>
          <a href='#'>
            <AiFillYoutube size={"1.7rem"} />
          </a>
          <a href='#'>
            <AiFillGithub size={"1.7rem"} />
          </a>

          <a href='#'>
            <AiFillLinkedin size={"1.7rem"} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
