import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "./articleContent.scss"

const ArticleContent = props => {
  console.log(props.data)
  const { title, author, content, localImage } = props.data.article
  return (
    <section>
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
    </section>
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
