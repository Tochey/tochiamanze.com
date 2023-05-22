import { Link, PageProps, graphql } from "gatsby";
import * as React from "react";
import  Layout  from "../components/Layout";
import { rhythm, scale } from "../utils/typography";
import SEO from "../components/Seo";

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostTemplateQuery>> = ({data}) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <SEO
        title={(post!.frontmatter!.title as string)}
        description={(post!.frontmatter!.description as string)}
      />
      <Link to="/">home</Link>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            {post!.frontmatter!.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 7),
              color: "#828282",
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post!.frontmatter!.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: (post!.html as string) }} />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostTemplate ($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;