import React from 'react';

import { Global, css } from '@emotion/react';
import { theme, GlobalStyles as BaseStyle } from 'twin.macro';
import { Navbar } from '.';

// global styles
const globalStyle = css({
  body: {
    backgroundColor: theme`colors.black`,
    fontFamily: theme`fontFamily.tajawal`,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <BaseStyle />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
