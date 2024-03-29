import React from "react";
import { Layout } from "./src/components";
import "prismjs/themes/prism-tomorrow.css";

export const wrapPageElement = ({ element, props }) => {
  return <Layout>{element}</Layout>;
};
