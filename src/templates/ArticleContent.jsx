import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "./articleContent.scss"

const ArticleContent = props => {
  console.log(props.data)
  const { title, author, content, localImage } = props.data.article
  return (
    <Layout>
      <section className="article">
        <Img
          fluid={localImage.childImageSharp.fluid}
          className="article__img"
        />
        <div className="article__content">
          <h2>
            {title} - <small>{author.name}</small>
         </h2>
          <p>{content}</p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($articleId: String!) {
    article(id: { eq: $articleId }) {
      summary
      title
      content
      localImage {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      id
      author {
        name
      }
    }
  }
`

export default ArticleContent
