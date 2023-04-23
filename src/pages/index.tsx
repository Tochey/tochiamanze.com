import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { TypeAnimation } from "react-type-animation";
import Title from "../components/Title";
import SelfDescription from "../components/SelfDescription";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title />
      <SelfDescription />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
