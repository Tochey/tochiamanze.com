import * as React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SelfDescription from "../components/SelfDescription";
import SEO from "../components/Seo";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" lang="en" meta={[]} description="" />
      <Title />
      <SelfDescription />
      <p className="my-5">Blogs:</p>
      {edges.map(({ node }) => {
        const title = node.frontmatter!.title || node.frontmatter!.slug;
        return (
          <li key={node.frontmatter!.slug}>
            <Link to={node.frontmatter!.slug as string}>{title}</Link>
          </li>
        );
      })}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
export const IndexPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
