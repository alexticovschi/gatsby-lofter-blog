import React from "react"
import Layout from "../components/layout"

import "./articleContent.scss"

const ArticleContent = props => {
  const { title, author, content, localImage } = props.pageContext
  return (
    <Layout>
      <section className="article">
        <img src={localImage.publicURL} className="article__img" />
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
