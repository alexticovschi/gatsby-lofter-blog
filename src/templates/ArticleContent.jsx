import React from "react"
import Layout from "../components/layout"

import "./articleContent.scss"

const ArticleContent = props => {
  const { title, author, content, imgUrl } = props.pageContext
  return (
    <Layout>
      <section className="article">
        <img src={imgUrl} />
        <h2>
          {title} - <small>{author.name}</small>
        </h2>
        <p>{content}</p>
      </section>
    </Layout>
  )
}

export default ArticleContent
