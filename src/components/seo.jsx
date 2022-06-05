import React from 'react';
import Helmet from 'react-helmet';

const Seo = (props) => {
  return <Helmet htmlAttributes={{ dir: props.pageDir || 'rtl' }} />;
};

export default Seo;
