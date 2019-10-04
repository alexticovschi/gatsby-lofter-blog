import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Article from "../components/Article/Article"

import "./index.scss"

const IndexPage = props => {
  const { allArticle } = props.data
  return (
    <Layout>
      <section className="articles">
        <div className="articles__wrapper">
          {allArticle.edges.map(article => (
            <article key={article.node.id} className="articles__article-item">
              <Article
                imgUrl={article.node.imgUrl}
                title={article.node.title}
                name={article.node.author.name}
                summary={article.node.summary}
              />
              <Link to={`/article/${article.node.id}`} className="link-btn">Read More</Link>
            </article>
          ))}
        </div>
      </section>
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
          content
          imgUrl
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
