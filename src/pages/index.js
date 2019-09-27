import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      Blog
    </Layout>
  );
}

export const query = graphql`
{
  allArticle {
    edges {
      node {
        summary
        title
        id
        author {
          name
        }
      }
    }
  }
}
`;

export default IndexPage
