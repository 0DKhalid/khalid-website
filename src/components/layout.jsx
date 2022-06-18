import React from "react";
import { Global, css } from "@emotion/react";
import { theme, GlobalStyles as BaseStyle } from "twin.macro";
import { Navbar, Footer } from ".";

// global styles
const globalStyle = css({
  body: {
    backgroundColor: theme`colors.black`,
    fontFamily: theme`fontFamily.tajawal`,
    direction: "rtl",
    color: theme`colors.white`,
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <BaseStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
