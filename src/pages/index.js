import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = props => {
  const { allArticle } = props.data;
  return (
    <Layout>
      {allArticle.edges.map(article => (
        <div key={article.node.id}>
          <h2> {article.node.title} - <small>{article.node.author.name}</small></h2>
          <div>
            {article.node.summary}
          </div>
          <Link to={`/article/${article.node.id}`}>Read More</Link>
        </div>
      ))}
    </Layout>
  )
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
`

export default IndexPage
