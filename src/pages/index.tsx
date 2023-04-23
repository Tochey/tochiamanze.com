import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { TypeAnimation } from "react-type-animation";
import Title from "../components/Title";
import SelfDescription from "../components/SelfDescription";
import SEO from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" lang="en" meta={[]} description="" />
      <Title />
      <SelfDescription />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
