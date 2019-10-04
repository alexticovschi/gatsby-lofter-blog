import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

import "./articleContent.scss"

const ArticleContent = props => {
  const { title, author, content, localImage } = props.pageContext;
  return (
    <Layout>
      <section className="article">
        <Img src={localImage.childImageSharp.fixed} className="article__img" />
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

export default ArticleContent
