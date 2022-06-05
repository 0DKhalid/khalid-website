import React from 'react';
import { Layout } from './src/components';

export const wrapPageElement = ({ element, props }) => {
  console.log(props);
  return <Layout>{element}</Layout>;
};
